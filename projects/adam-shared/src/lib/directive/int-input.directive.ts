import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';

@Directive({ selector: "[appIntegerInput]" })
export class IntInputDirective implements OnInit {
  @Input() appIntegerInput: boolean = false;
  private input: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.input = this.elementRef.nativeElement.querySelector('input');
  }


  @HostListener("input", ["$event.target.value"])
  onInput(value: any) {
    if (this.input.maxLength != -1) {
      if (value.length <= this.input.maxLength) {
        this.input.value = value.replace(/\D/g, '');
      }
      else {
        this.input.value = this.input.value.slice(0, this.input.maxLength);
      }
    }
    else {
      this.input.value = value.replace(/\D/g, '');
    }

  }
  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let e = <KeyboardEvent>event;
    if (this.appIntegerInput) {
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
}
