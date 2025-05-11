import { Component, OnInit, Input, forwardRef, ViewEncapsulation, Output, EventEmitter } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
@Component({
  selector: 'lib-adam-checkbox',
  templateUrl: './adam-checkbox.component.html',
  styleUrl: './adam-checkbox.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamCheckboxComponent),
      multi: true
    }
  ]
})
export class AdamCheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() value: string = "";
  @Input() label: string = "";
  @Input() name: string = "";
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() isReadOnly: boolean = false;
  @Input() color: string = "primary";
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  handelChange(event: any) {
    this.checked = event.checked;
    this.propagateChange(this.checked);
    this.change.emit(event);
  }

  writeValue(obj: boolean): void {
    if (obj !== undefined) {
      this.checked = obj;
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }


}
