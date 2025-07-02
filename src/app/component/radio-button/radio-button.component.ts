import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  radios: any[] = [
    {
      label: 'Accounting',
      value: 1,
    },
    {
      label: 'Marketing',
      value: 2,
    },
    {
      label: 'Production',
      value: 3,
    },
    {
      label: 'Research',
      value: 4,
    }
  ];

  radios2: any[] = [
    {
      label: 'Accounting',
      value: 1,
    },
    {
      label: 'Marketing',
      value: 2,
    },
    {
      label: 'Production',
      value: 3,
    },
    {
      label: 'Research',
      value: 4,
    }
  ];

  radios3: any[] = [
    {
      label: 'I forgot my password',
      value: 1,
    },
    {
      label: 'I forgot my username',
      value: 2,
    },
    {
      label: 'I forgot both',
      value: 3,
    },
    {
      label: 'Research',
      value: 4,
    }
  ];

  selectedRadio: any = 1;
  selectedRadio2: any = 2;
  selectedRadio3: any = 3;

  onRadioButtonClick(event: any) {
    this.selectedRadio = event;
  }

  onRadioButtonClick2(event: any) {
    this.selectedRadio2 = event;
  }

  onRadioButtonClick3(event: any) {
    this.selectedRadio3 = event;
  }
}
