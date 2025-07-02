import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'adam-radio-button',
  templateUrl: './adam-radio-button.component.html',
  styleUrl: './adam-radio-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamRadioButtonComponent),
      multi: true
    }
  ]
})
export class AdamRadioButtonComponent {
  @Input() selectedValue: any = null;
  _radios: any[] = [];
  @Input() set radios(value: any[]) {
    this._radios = [...value];
  };
  @Input() direction: 'vertical' | 'horizontal' = "vertical";
  @Input() color: string = "primary";
  @Input() disabled = false;
  @Output() onClick = new EventEmitter();

  onRadioButtonClick(selectedValue: any) {
    this.selectedValue = selectedValue;
    this.onClick.emit(selectedValue);
  }

  writeValue(obj: any): void {
    this.selectedValue = obj;
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

}
