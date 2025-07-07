import { Component, OnInit, Input, forwardRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'adam-lib-text-box',
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
  _width: string;
  @Input() set width(value: string) {
    if (value) {
      this._width = value;
    }
  };
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
  @Input() iconTooltip: string;
  @Input() iconTooltipPosition: string;
  @Input() isDisableValidationAfterSubmit: boolean = false;
  @Input() isDisplayIconStart: boolean = false;
  @Input() rotateDeg: number = 270;

  _submitted: boolean;
  @Input() set submitted(value: boolean) {
    this._submitted = value
  };
  _marginEnd: any = '0px';
  @Input() set marginEnd(value: any) {
    this._marginEnd = value;
  };
  _startIcons: any[] = [];
  _endIcons: any[] = [];
  _icons: any[] = [];
  @Input() set icons(value: any[]) {
    this._icons = value;
    this._startIcons = value?.filter(p => p?.position == 'start');
    this._endIcons = value?.filter(p => p?.position == 'end');
    if (this._icons?.length > 0 && this._startIcons?.length == 0 && this.isDisplayIconStart) {
      this._startIcons = this._icons;
    }
    if (this._icons?.length > 0 && this._endIcons?.length == 0 && !this.isDisplayIconStart) {
      this._endIcons = this._icons;
    }
    if (this._endIcons.length > 0) {
      this._marginEnd = `${this._endIcons.length * 40}px`
    }
  };
  @Input() readOnly?: boolean = false;

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
    let width = 0;
    let style = {};
    let marginEnd = Number(this._marginEnd.substring(0, this._marginEnd.length - 2));
    if (this._width && this._width.substring(this._width.length - 2, this._width.length) == 'px') {
      width = Number(this._width.substring(0, this._width.length - 2));
      style = {
        'width': `${width + 50}px`,
        'height': this.height,
        '--margin-end': `${marginEnd + (this.icon != null ? 50 : 0) + (this._endIcons.length > 0 ? this._endIcons.length * 40 : 0)}px`,
        '--rotateDeg': this.rotateDeg + 'deg'
      };
    }
    if (this._width && this._width.substring(this._width.length - 1, this._width.length) == '%') {
      width = Number(this._width.substring(0, this._width.length - 1));
      style = {
        'width': `${width}%`,
        'height': this.height,
        '--margin-end': `${marginEnd + (this.icon != null ? 50 : 0) + (this._endIcons.length > 0 ? this._endIcons.length * 40 : 0)}px`,
        '--rotateDeg': this.rotateDeg + 'deg'
      };
    }
    return style;
  }

  getContainerStyle() {
    let width = 0;
    let style = {};
    if (this._width && this._width.substring(this._width.length - 2, this._width.length) == 'px') {
      width = Number(this._width.substring(0, this._width.length - 2));
      style = {
        'width': `${width + 50}px`,
        'height': this.height,
        '--margin-end': this._marginEnd,
      };
    }
    if (this._width && this._width.substring(this._width.length - 1, this._width.length) == '%') {
      width = Number(this._width.substring(0, this._width.length - 1));
      style = {
        'width': `${width}%`,
        'height': this.height,
        '--margin-end': this._marginEnd,
      };
    }
    return style;
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
      return !hasWhitespace ? {} : { 'whitespace': 'value is only whitespace' }
    };
  }

  private validatorFn = this.noWhitespaceValidator();

  validate(control: AbstractControl): { [key: string]: any } {
    let validatorFn = this.validatorFn(control)
    return validatorFn ? validatorFn : {};
  }

  onIconClick(event?: any) {
    this.onIconClicked.emit(event);
  }
}
