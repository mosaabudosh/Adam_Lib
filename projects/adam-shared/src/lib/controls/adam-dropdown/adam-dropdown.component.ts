import { Component, EventEmitter, Input, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'adam-lib-dropdown',
  templateUrl: './adam-dropdown.component.html',
  styleUrl: './adam-dropdown.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamDropdownComponent),
      multi: true
    }
  ]
})
export class AdamDropdownComponent {
  dataSource: any[] = [];
  widthNumber: number;

  @Input() height: string;
  _width: string;
  @Input() set width(value: string) {
    if (value) {
      this._width = value;
      this.widthNumber = parseInt(value, 10);
    }
  };
  _selectedValue?: any;
  @Input() set selectedValue(value: any) {
    this._selectedValue = value;
  }
  dropdoenDisabled: boolean = false;
  @Input() set disabled(value: boolean) {
    this.dropdoenDisabled = value;
  };
  @Input() placeholder: string = "Select one";
  @Input() borderRadius: string = '3px';
  @Input() filter: boolean = true;
  @Input() designer: boolean = false;
  @Input() class: string;
  @Input() required: boolean = false;
  public style: object = {};
  @Input() ngStyle: string;
  @Input() showClear?: boolean = false;
  @Input() isShowRefreshButton: boolean = true;
  @Input() heightMidDevices?: string;
  @Input() widthMidDevices?: string;
  @Input() heightSmallDevices?: string;
  @Input() widthSmallDevices?: string;
  @Input() sorting: string = 'asc';
  @Input() isSort: boolean = true;
  @Input() isDisableValidationAfterSubmit: boolean = false;
  @Input() readOnly?: boolean = false;
  @Input() emptyFilterMessage: string;
  @Input() group: boolean = false;
  @Input() set dropdown(value: any[]) {
    this.dataSource = value;
    this.sortData(value);
  }
  _isSortByValue: boolean = false;
  @Input() set isSortByValue(value: boolean) {
    this._isSortByValue = value;
    this.sortData(this.dataSource);
  }
  _submitted: boolean;
  @Input() set submitted(value: boolean) {
    this._submitted = value
  };
  _marginEnd: any = '0px';
  @Input() set marginEnd(value: any) {
    this._marginEnd = value;
  };
  invalid: boolean;

  @Output() onSelectChanged = new EventEmitter<any>();
  @Output() onShow = new EventEmitter();
  @Output() onHide = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onFocus = new EventEmitter();
  @Output() onRefresh = new EventEmitter();

  constructor() { }

  getStyles() {
    let width = 0;
    let style = {};
    let marginEnd = Number(this._marginEnd.substring(0, this._marginEnd.length - 2));
    if (this._width && this._width.substring(this._width.length - 2, this._width.length) == 'px') {
      width = Number(this._width.substring(0, this._width.length - 2));
      style = {
        'width': `${width + 50}px`,
        'height': this.height,
        '--margin-end': `${marginEnd}px`,
      };
    }
    if (this._width && this._width.substring(this._width.length - 1, this._width.length) == '%') {
      width = Number(this._width.substring(0, this._width.length - 1));
      style = {
        'width': `${width}%`,
        'height': this.height,
        '--margin-end': `${marginEnd}px`,
      };
    }
    return style;
  }

  getIsValid() {
    let valid = true;
    if (this.required && this._submitted) {
      valid = this._selectedValue != null;
    }
    return valid;
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

  handelChange(event: any) {
    this._selectedValue = event.value;
    this.propagateChange(this._selectedValue);
    let item: any = null;
    if (this.group) {
      this.dataSource.every((p: any) => {
        if (p.items) {
          item = <any>p.items.find((d: any) => d.value == event.value);
          if (item) {
            return false;
          }
        }
        return true;
      });

    }
    else {
      item = this.dataSource.find(d => d.value == event.value);
    }
    let attributes = item != null ? item.attributes : null;
    this.onSelectChanged.emit({
      value: event.value,
      attributes: attributes != null ? attributes : attributes
    });
  }

  writeValue(obj: any): void {
    if (obj !== undefined && obj !== null) {
      this._selectedValue = obj;
      let event = { value: obj };
    }
    else
      this._selectedValue = null;
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

  handleOnBlur(event: any) {
    this.onBlur.emit();
  }
  
  handleOnFocus(event: any) {
    this.onFocus.emit();
  }

  refreshData() {
    this.onRefresh.emit();
  }

  handleOnShow(event: any) {
    this.onShow.emit(event);
  }

  handleOnHide(event: any) {
    this.onHide.emit(event);
  }

  sortData(data: any[]) {
    if (data != undefined && data != null && this.isSort && !this._isSortByValue) {
      data = data.map(x =>
        x.label === null
          ? { ...x, label: "", value: x.value }
          : x
      );
      if (this.sorting == 'asc') {
        this.dataSource = data.sort((a, b) =>
          (a.value == null ? -1 : (b.value == null ? 1 : ((a.label.toLowerCase() > b.label.toLowerCase()) ? 1 : -1))));
      } else {
        this.dataSource = data.sort((a, b) => (a.value == null ? -1 : (b.value == null ? 1 : (a.label.toLowerCase() > b.label.toLowerCase() ? -1 : 1))));
      }
      this.dataSource = [... this.dataSource];
    }
    else if (data != undefined && data != null && this._isSortByValue) {
      data = data.map(x =>
        x.label === null
          ? { ...x, label: "", value: x.value }
          : x
      );
      this.dataSource = data.sort((a, b) => (a.value == null ? -1 : (b.value == null ? 1 : ((a.value > b.value) ? 1 : -1))));
      this.dataSource = [... this.dataSource];
    }
    else if (data != undefined && data != null) {
      this.dataSource = data;
    }
  }
}
