import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'adam-input-otp',
  templateUrl: './adam-input-otp.component.html',
  styleUrl: './adam-input-otp.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamInputOtpComponent),
      multi: true
    },
    { provide: NG_VALIDATORS, useExisting: AdamInputOtpComponent, multi: true }
  ]
})
export class AdamInputOtpComponent {
  noWhitespace: boolean = false;
  _value?: any;
  @Input() set value(value: any) {
    this._value = value;
  }
  _submitted: boolean;
  @Input() set submitted(value: boolean) {
    this._submitted = value
  };
  @Input() required: boolean = false;
  @Input() variant: 'filled' | 'outlined' = 'outlined';
  @Input() disabled: boolean = false;
  @Input() integerOnly: boolean = false;
  @Input() invalid: boolean = false;
  @Input() readonly: boolean = false;
  @Input() autofocus: boolean = false;
  @Input() mask: boolean = false;
  @Input() tabindex: any = null;
  @Input() length: number = 4;
  @Input() color: string = "primary";
  @Input() isDefaultStyle: boolean = false;

  @Output() onOTPBlur = new EventEmitter();
  @Output() onOTPFocus = new EventEmitter();
  @Output() onSelectChanged = new EventEmitter<any>();

  onChange(event: any) {
    this._value = event?.value;
    this.onSelectChanged.emit(event);
  }

  onFocus(event: any) {
    this.onOTPFocus.emit(event);
  }

  onBlur(event: any) {
    this.onOTPBlur.emit(event);
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this._value = obj;
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

  noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!this.required && !this.noWhitespace) {
        return {};
      }
      let value = (control.value || '');
      let hasWhitespace = (value.length > 0 && value.trim().length === 0);
      return {};
    };
  }

  private validatorFn = this.noWhitespaceValidator();

  validate(control: AbstractControl): { [key: string]: any } {
    let validatorFn = this.validatorFn(control)
    return validatorFn ? validatorFn : {};
  }

}
