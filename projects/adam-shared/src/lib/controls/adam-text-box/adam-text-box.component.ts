import { Component, OnInit, Input, forwardRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'adam-lib-text-box',
  standalone: false,
  templateUrl: './adam-text-box.component.html',
  styleUrl: './adam-text-box.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamTextBoxComponent),
      multi: true
    },
    { provide: NG_VALIDATORS, useExisting: AdamTextBoxComponent, multi: true }
  ]
})
export class AdamTextBoxComponent implements OnInit, ControlValueAccessor, Validator {
  @ViewChild("input") input: any;
  @Input() id: string;
  @Input() size: string;
  @Input() height: string = "40px";
  @Input() width: string;
  @Input() widthClass: string = "small";
  @Input() heightClass: string;
  @Input() placeholder: string = "Type here";
  @Input() name: string = "test";
  @Input() type: string = "text";
  @Input() disabled: boolean;
  @Input() required: boolean = false;
  @Input() public style: any = {};
  @Input() class: string;
  @Input() minValue: string;
  @Input() maxValue: string;
  @Input() textValue: string | null = null;
  @Input() noWhitespace: boolean = false;
  @Input() minLength: string;
  @Input() maxLength: string = '50';
  @Input() icon: string | null = null;
  @Input() isDisableValidationAfterSubmit: boolean = false;
  @Input() isDisplayIconStart: boolean = false;
  _submitted: boolean;
  @Input() set submitted(value: boolean) {
    this._submitted = value
  };
  marginEnd: string = this.icon != null ? '50px' : '60px';

  _icons: any[] = [];
  @Input() set icons(value: any[]) {
    this._icons = value;
    if (this._icons.length > 0)
      this.marginEnd = `${this._icons.length * 40}px`
  };

  @Output() blur = new EventEmitter();
  @Output() onTextChange = new EventEmitter();
  @Output() onIconClicked = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  getIsValid() {
    let valid = true;
    if (this.required && this._submitted) {
      valid = this.textValue != null;
    }
    return valid;
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

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

  handelChange(event: any) {
    if (event?.target?.value != "") {
      this.textValue = event?.target?.value;
      this.propagateChange(this.textValue);
    } else {
      this.textValue = null;
      this.propagateChange(this.textValue);
    }
  }

  getStyles() {
    return {
      width: this.width,
      height: this.height
    };
  }

  onblur(event: any) {
    this.blur.emit(event);
  }

  onTextChanged(searchValue: any): void {
    this.onTextChange.emit(searchValue);
  }

  noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!this.required && !this.noWhitespace) {
        return {};
      }
      let value = (control.value || '');
      let hasWhitespace = (value.length > 0 && value.trim().length === 0);
      // return !hasWhitespace ? null : { 'whitespace': 'value is only whitespace' }
      return {};
    };
  }

  private validatorFn = this.noWhitespaceValidator();

  validate(control: AbstractControl): { [key: string]: any } {
    let validatorFn = this.validatorFn(control)
    return validatorFn ? validatorFn : {};
  }

  onIconClick() {
    this.onIconClicked.emit();
  }
}
