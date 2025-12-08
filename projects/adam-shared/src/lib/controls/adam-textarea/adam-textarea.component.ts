import { Component, OnInit, Input, forwardRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-adam-textarea',
  templateUrl: './adam-textarea.component.html',
  styleUrl: './adam-textarea.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamTextareaComponent),
      multi: true
    }]
})
export class AdamTextareaComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = "Type here";
  @Input() height: string;
  @Input() width: string;
  @Input() widthClass: string;
  @Input() size: string;
  @Input() cols: number;
  @Input() textValue: string;
  @Input() ngClass?: string;
  @Input() minValue: string;
  @Input() maxValue: string;
  @Input() required?: boolean = false;
  @Input() readOnly?: boolean = false;
  @Input() rowsNumber: number = 3;
  @Input() disabled: boolean;
  @Input() minLength: string;
  @Input() maxLength: string = '300';
  @Input() resizable?: boolean = true;
  @Input() borderRadius: string = '5px';

  @Output() blur = new EventEmitter();
  public style: object = {};

  constructor() { }

  ngOnInit() { }

  getStyles() {
    return {
      "width": this.width,
      "height": this.height
    };
  }

  onblur(event: any) {
    this.blur.emit(event);
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.textValue = obj;
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  handelChange(event: any) {
    this.textValue = event.target.value;
    this.propagateChange(this.textValue);
  }

}
