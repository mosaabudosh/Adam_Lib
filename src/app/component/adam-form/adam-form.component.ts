import { Component, ViewContainerRef } from '@angular/core';
import { AdamMessageService, ComponentFactoryResolverService } from 'adam-shared';
import { AdamPopupComponent } from '../adam-popup/adam-popup.component';

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

  constructor(
    private componentFactoryResolverService: ComponentFactoryResolverService,
    public viewContainerRef: ViewContainerRef,
    private _adamMessageService: AdamMessageService) {

  }

  openPopup() {
    let adamPopupComponent = <AdamPopupComponent>this.componentFactoryResolverService.createPopup(AdamPopupComponent, this.viewContainerRef);
    adamPopupComponent.open();
    let adamPopupComponentSubscription = adamPopupComponent.onSubmitted.subscribe(response => {
      this._adamMessageService.showSuccess();
      this._adamMessageService.showError();
      this._adamMessageService.showWarn();
      this._adamMessageService.showInfo();
      adamPopupComponentSubscription.unsubscribe();
    });
  }
}
