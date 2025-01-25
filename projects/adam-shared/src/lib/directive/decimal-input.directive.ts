import { Directive, HostListener, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({ selector: "[ngModel][appDecimalInput],[appDecimalInput]" })
export class DecimalInputDirective implements OnInit {
    @Input() appDecimalInput: boolean = false;
    private input: HTMLInputElement;
    readonly asciiCodes: any[] = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    @Input('precision') precision: any = 18;
    @Input('scale') scale: any = 4;
    constructor(private elementRef: ElementRef, private model: NgModel) {
    }

    ngOnInit() {
        this.input = this.elementRef.nativeElement.querySelector('input');
    }


    @HostListener("input", ["$event.target.value"])
    onInput(value: any) {
        value = this.InputChecked(value);
        if (value.match(/\./g)) {
            if (this.input.value.match(/\./g)) {
                if (this.input && this.input.value && this.input!.value!.match(/\./g)!.length > 1) {
                    let index = this.input.value.lastIndexOf('.');
                    this.input.value = this.input.value.substring(0, index);
                    this.model?.valueAccessor?.writeValue(this.input.value);
                    value = this.input.value;
                } else {
                    value = value.replace(/[^0-9. | \-]/g, '');
                    let index = value.indexOf('.');
                    if (index == -1) {
                        if (value.length > this.precision) {
                            value = value.substring(0, this.precision);
                        }
                    }
                    else {
                        let precisionPart = value.substring(0, index);
                        let scalePart = value.substring(index + 1, value.length);
                        if (precisionPart.length > this.precision) {
                            precisionPart = precisionPart.substring(0, this.precision);
                        }
                        if (scalePart.length > this.scale) {
                            scalePart = scalePart.substring(0, this.scale);
                        }
                        value = precisionPart + '.' + scalePart;
                    }
                }
            }
        }



        this.input.value = value;
    }
    @HostListener('keydown', ['$event']) onKeyDown(event: any) {
        let e = <KeyboardEvent>event;
        if (this.appDecimalInput) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||

                // 46 => Delete , 8 => Backspace , 9 => tab , 27 => escape, 13 => enter, 110 => decimal point, 190 => period
                (e.key === 'e' && (e.ctrlKey || e.metaKey)) ||
                (e.key === 'a' && (e.ctrlKey || e.metaKey)) || // Allow: Ctrl+A
                (e.key === 'c' && (e.ctrlKey || e.metaKey)) || // Allow: Ctrl+C
                (e.key === 'v' && (e.ctrlKey || e.metaKey)) || // Allow: Ctrl+V
                (e.key === 'x' && (e.ctrlKey || e.metaKey)) || // Allow: Ctrl+X
                (e.key === 'a' && (e.metaKey === true)) || // Allow: Cmd+A (mac)
                (e.key === 'c' && (e.metaKey === true)) || // Allow: Cmd+C (mac)
                (e.key === 'v' && (e.metaKey === true)) || // Allow: Cmd+V (mac)
                (e.key === 'x' && (e.metaKey === true)) || // Allow: Cmd+X (mac)
                // Allow: 35 => home, end, left, 39 => right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    }

    InputChecked(value: any) {
        let indexsToRemove: any[] = [];
        for (var i = 0; i < value.length; ++i) {
            let ascii = value.charCodeAt(i);
            if (!this.asciiCodes.includes(ascii)) {
                indexsToRemove = [...indexsToRemove, value[i]]
            }
        }

        for (var i = 0; i < indexsToRemove.length; i++) {
            if (indexsToRemove[i] == '-' && value[0] == '-') {
                value = `-${value.substring(1, value.length).replace(indexsToRemove[i], '')}`;
            }
            else {
                value = value.replace(indexsToRemove[i], '');
            }
        }
        return value;
    }
}
