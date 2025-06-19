import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adam-input-otp',
  templateUrl: './adam-input-otp.component.html',
  styleUrl: './adam-input-otp.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamInputOtpComponent {
  _value?: any;
  @Input() set value(value: any) {
    this._value = value;
  }
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
    this.onSelectChanged.emit(event);
  }

  onFocus(event: any) {
    this.onOTPFocus.emit(event);
  }

  onBlur(event: any) {
    this.onOTPBlur.emit(event);
  }
}
