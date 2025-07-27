import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'adam-search-box',
  templateUrl: './adam-search-box.component.html',
  styleUrl: './adam-search-box.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamSearchBoxComponent),
      multi: true
    }
  ]
})
export class AdamSearchBoxComponent implements OnInit {
  @Input() width: string = '150px';
  @Input() height: string = '100%';
  @Input() placeholder: any = "Search...";
  @Input() ngModel: any;
  @Input() name: string;
  @Input() textValue: any = "";
  @Input() maxlength: string = "100";
  @Input() icon: string;
  public style: object = {};

  @Output() onIconClicked = new EventEmitter();
  @Output() onChange = new EventEmitter();

  constructor() {

  }

  ngOnInit() { }

  getStyles() {
    return {
      'min-width': this.width,
      'height': this.height
    };
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

  onTextChange(event: any) {
    this.textValue = event.target.value;
    this.onChange.emit(event);
    this.propagateChange(this.textValue);
  }
}
