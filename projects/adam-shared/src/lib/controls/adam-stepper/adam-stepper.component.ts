import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adam-stepper',
  templateUrl: './adam-stepper.component.html',
  styleUrl: './adam-stepper.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamStepperComponent {

  _steppers: any[] = [];
  @Input() set steppers(value: any[]) {
    this._steppers = value;
  }
  @Input() color: string;
  @Input() nextLabel: string = 'Next';
  @Input() backLabel: string = 'Back';
  @Input() buttonPos: string;
  @Input() orientation: 'vertical' | 'horizontal' | any = 'horizontal';
  _active: number = 0;
  @Input() set active(value: number) {
    this._active = value;
  }

  @Input() isViewBack: boolean = false;
  @Input() isViewNext: boolean = true;
  @Input() isViewNumber: boolean = true;
  @Input() isViewTitle: boolean = true;

  @Input("commands") commands: any[] = [];

  @Output() onPrevCallBack = new EventEmitter();
  @Output() onNextCallBack = new EventEmitter();
  @Output() onClick = new EventEmitter();

  constructor() { }

  onStepperClick(event: any) {
    console.log('onStepperClick', event)
  }

  prev(event: any, index: number) {
    // this.active = index - 1;
    this.onPrevCallBack.emit();
  }

  next(event: any, index: number) {
    // this.active = index + 1;
    this.onNextCallBack.emit();
  }

}
