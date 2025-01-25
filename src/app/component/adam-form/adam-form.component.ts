import { Component } from '@angular/core';

@Component({
  selector: 'app-adam-form',
  standalone: false,
  templateUrl: './adam-form.component.html',
  styleUrl: './adam-form.component.scss'
})
export class AdamFormComponent {
  citiyId: number | null = null;
  textBox: string;
  cities = [
    { label: 'New York', value: 1 },
    { label: 'Rome', value: 2 },
    { label: 'London', value: 3 },
    { label: 'Istanbul', value: 4 },
    { label: 'Paris', value: 5 }
  ];

  textBoxIcons = [
    {
      icon: "pi pi-send",
      tooltip: 'send',
      tooltipPosition: 'top',
      command: (event: any) => {
        console.log('send')
      }
    },
    {
      icon: "pi pi-camera",
      tooltip: 'cog',
      tooltipPosition: 'top',
      command: (event: any) => {
        console.log('cog')
      }
    },
    {
      icon: "pi pi-file",
      tooltip: 'cog',
      tooltipPosition: 'top',
      command: (event: any) => {
        console.log('cog')
      }
    },
    {
      icon: "pi pi-plus",
      tooltip: 'send',
      tooltipPosition: 'top',
      command: (event: any) => {
        console.log('send')
      }
    }
  ]
  fromDate: Date;


}
