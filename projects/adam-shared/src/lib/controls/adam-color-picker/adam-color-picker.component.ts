import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ColorPickerChangeEvent } from 'primeng/colorpicker';

@Component({
  selector: 'lib-adam-color-picker',
  templateUrl: './adam-color-picker.component.html',
  styleUrl: './adam-color-picker.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamColorPickerComponent),
      multi: true
    }
  ]
})
export class AdamColorPickerComponent {
  @Input() inline: boolean;
  @Input() format: 'hex' | 'rgb' | 'hsb';
  @Input() disabled: boolean;
  _color?: any;
  @Input() set color(value: any) {
    this._color = value;
  }

  @Output() onColorChange = new EventEmitter();
  @Output() onShow = new EventEmitter();
  @Output() onHide = new EventEmitter();


  handleChange(event: ColorPickerChangeEvent) {
    this._color = event.value;
    this.propagateChange(this._color);
    this.onColorChange.emit(event)
  }

  handleShow(event: any) {
    this.onShow.emit(event)
  }

  handleHide(event: any) {
    this.onHide.emit(event)
  }

  writeValue(obj: any): void {
    if (obj !== undefined && obj !== null) {
      this._color = obj;
    }
    else
      this._color = null;
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }
}
