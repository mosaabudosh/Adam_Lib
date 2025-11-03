import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent {
  commands: any[] = [];
  steppers: any[] = [];
  steppers_1: any[] = [];

  activeStep: number = 0
  dropdowns: any[] = [];
  constructor() {
    this.dropdowns = [
      { label: 'dropdown 1', value: 1 },
      { label: 'dropdown 2', value: 2 },
      { label: 'dropdown 3', value: 3 },
      { label: 'dropdown 4', value: 4 }
    ]
    this.steppers_1 = [
      {
        index: 0,
        header: "header 1",
      },
      {
        index: 1,
        header: "header 2",
      },
      {
        index: 2,
        header: "header 3",
      }]
    this.steppers = [
      {
        index: 0,
        header: "",
      },
      {
        index: 1,
        header: "",
      },
      {
        index: 2,
        header: "",
      },
      {
        index: 3,
        header: "",
      }
    ];
  }

  onNextCallBack() {
    this.activeStep = this.activeStep + 1;
  }

  onPrevCallBack() {
    this.activeStep = this.activeStep - 1;
  }
}
