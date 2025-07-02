import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { AdamMessageService, AdamMessageType, ComponentFactoryResolverService, ConfirmationPopupComponent } from 'adam-shared';
import { AdamPopupComponent } from '../adam-popup/adam-popup.component';

@Component({
  selector: 'app-adam-form',
  templateUrl: './adam-form.component.html',
  styleUrl: './adam-form.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamFormComponent {
  citiyId: number | null = null;
  textBox: string;
  catrDetailCount: number = 4;
  date: Date | null = null;
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
  ];
  catrDetailCountIcons = [
    {
      icon: "pi pi-minus",
      tooltip: 'minus',
      tooltipPosition: 'top',
      position: 'start',
      command: (event: any) => {
        console.log('minus')
        this.catrDetailCount = this.catrDetailCount - 1;
      }
    },
    {
      icon: "pi pi-plus",
      tooltip: 'plus',
      tooltipPosition: 'top',
      position: 'end',
      command: (event: any) => {
        console.log('plus')
        this.catrDetailCount = this.catrDetailCount + 1;
      }
    },
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
      this._adamMessageService.showTost(AdamMessageType.Success, 'Success', 'Success Message Content');
      adamPopupComponentSubscription.unsubscribe();
    });
  }

  openConfirmationPopup() {
    let confimationPopup = <ConfirmationPopupComponent>(this.componentFactoryResolverService.createPopup(ConfirmationPopupComponent, this.viewContainerRef));
    confimationPopup.open();
    let confimationPopupSubscribtion = confimationPopup.onConfirmClick.subscribe(() => {
      console.log('onConfirmClick')
      confimationPopupSubscribtion.unsubscribe();
    });
    let cancelSubscribtion = confimationPopup.onCancelClick.subscribe(() => {
      console.log('onCancelClick')
      cancelSubscribtion.unsubscribe();
    });
  }

  openDeleteConfirmationPopup() {
    let deleteConfimationPopup = <ConfirmationPopupComponent>(this.componentFactoryResolverService.createPopup(ConfirmationPopupComponent, this.viewContainerRef));
    deleteConfimationPopup.title = 'Delete';
    deleteConfimationPopup.confirmLabel = 'Delete';
    deleteConfimationPopup.cancelLabel = 'Close';
    deleteConfimationPopup.confirmButtonColor = 'dangerous';
    deleteConfimationPopup.icon = 'assets/images/delete.png';
    deleteConfimationPopup.open();
    let deleteSubscribtion = deleteConfimationPopup.onConfirmClick.subscribe(() => {
      console.log('onConfirmClick')
      deleteSubscribtion.unsubscribe();
    });
    let cancelSubscribtion = deleteConfimationPopup.onCancelClick.subscribe(() => {
      console.log('onCancelClick')
      cancelSubscribtion.unsubscribe();
    });
  }


}
