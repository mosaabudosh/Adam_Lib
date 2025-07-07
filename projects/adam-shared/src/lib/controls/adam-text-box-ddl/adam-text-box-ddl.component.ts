import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation, ViewChild, forwardRef, AfterViewInit } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, ValidatorFn, AbstractControl, Validator } from '@angular/forms';

@Component({
  selector: 'lib-adam-text-box-ddl',
  templateUrl: './adam-text-box-ddl.component.html',
  styleUrl: './adam-text-box-ddl.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamTextBoxDDLComponent),
      multi: true
    },
    { provide: NG_VALIDATORS, useExisting: AdamTextBoxDDLComponent, multi: true }
  ]
})
export class AdamTextBoxDDLComponent implements OnInit, AfterViewInit, ControlValueAccessor, Validator {

  selectedObject: any;
  selectedItems: any[] | undefined;
  emptyData: string | undefined = undefined;
  @Input() height: string = '35px';
  _width: string = '500px';
  @Input() set width(value: any) {
    if (value) {
      this._width = value;
    }
  };
  @Input() set object(value: any) {
    if (value != null && value != undefined) {
      this._suggestions = [];
      this.selectedObject = value;
      this._suggestions.push(this.selectedObject);
    }
  }

  @Input() set objects(value: any[] | undefined) {
    if (value != null && value != undefined) {
      this._suggestions = [];
      this.selectedItems = value;
      this._suggestions = this.selectedItems;
    }
  }
  @ViewChild('autocomplete') autocomplete: AutoComplete;
  @Input() color: string = "waring";
  @Input() required = false;
  @Input() noWhitespace: boolean = false;
  @Input() autoFocus: boolean = false;
  @Input() readonly: boolean = false
  @Input() isAutoDeleteDataAfterSelected: boolean = false;
  @Input() isShowEmptyMessage: boolean = true
  @Input() disabled: boolean;
  @Input() styleClass: any;
  @Input() inputStyleClass: any;
  @Input() panelStyleClass: any;
  _suggestions: any[] = [];
  @Input() set suggestions(value: any[]) {
    this._suggestions = value;
  }
  @Input() placeholder: string = 'Search here ...';
  @Input() borderRadius: string = '5px';
  @Input() dropdownIcon: string = 'pi pi-search';
  @Input() multiple: boolean = false
  @Input() showClear: boolean = false
  @Input() isShowDropdownIcon = false;
  @Input() name: string = 'name';

  @Output() onEnter = new EventEmitter();
  @Output() onClear = new EventEmitter();
  @Output() onLookUp = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onTextChange = new EventEmitter();
  @Output() onDropdownClick = new EventEmitter();

  constructor() { }

  ngAfterViewInit(): void {
    if (this.autoFocus == true) {
      this.autocomplete.focused = true;
    }
  }

  ngOnInit() { }

  getStyles() {
    return {
      'width': this._width,
      'height': this.height,
    };
  }

  getContainerStyle() {
    return {
      'width': this._width,
      'height': this.height,
    };
  }

  dropdownClick() {
    this.onDropdownClick.emit();
  }

  onTextChanged(event: any): void {
    this.onTextChange.emit(event?.target?.value)
  }

  queryChanged(event: any) {
    if (event.query.trim() != '') {
      this.onLookUp.emit(event.query);
      this.isShowEmptyMessage = true;
    }
    else {
      this.suggestions = [];
      this.onLookUp.emit(null);
      this.isShowEmptyMessage = false;
    }
  }

  selectedChanged() {
    if (this.multiple) {
      this.onSelect.emit(this.selectedItems);
      if (this.isAutoDeleteDataAfterSelected) {
        this.selectedItems = [];
      }
    } else {
      this.onSelect.emit(this.selectedObject);
      if (this.isAutoDeleteDataAfterSelected) {
        this.selectedObject = null;
      }
    }
  }

  onAutoCompleteEnter(event: any) {
    event.preventDefault();
    this.onEnter.emit({ label: event.target.value });
  }

  clear() {
    this.onClear.emit();
  }

  handelChange(event: any) {
    if (this.multiple) {
      if (event.target.value != "") {
        this.selectedItems = event.target.value;
        this.propagateChange(this.selectedItems);
      } else {
        this.selectedItems = [];
        this.propagateChange(this.selectedItems);
      }
    }
    else {
      if (event.target.value != "") {
        this.selectedObject = event.target.value;
        this.propagateChange(this.selectedObject);
      } else {
        this.selectedObject = null;
        this.propagateChange(this.selectedObject);
      }
    }

  }

  writeValue(obj: any): void {
    if (this.multiple) {
      if (obj !== undefined) {
        this.selectedItems = obj;
      }
    }
    else {
      if (obj !== undefined) {
        this.selectedObject = obj;
      }
    }

  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

  private validatorFn = this.noWhitespaceValidator();

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

  validate(control: AbstractControl): { [key: string]: any } {
    let validatorFn = this.validatorFn(control)
    return validatorFn ? validatorFn : {};
  }
}
