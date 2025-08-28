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
  selectedItem: number | null = null;
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
  items: any[] = [];
  suggestions: any[] = [];
  options: any[] = [];
  first: number = 0;
  last: number = 16;
  selectedItems: any[] | undefined;
  countries: any[] = []
  countryId: any;

  constructor(
    private componentFactoryResolverService: ComponentFactoryResolverService,
    public viewContainerRef: ViewContainerRef,
    private _adamMessageService: AdamMessageService) {
    setTimeout(() => {
      this.items = [];
      for (let i = 0; i < 100; i++) {
        this.items.push({ label: 'Item ' + (i + 1), value: (i + 1) });
      }
    }, 1000);

    // this.items = [];
    // for (let i = 0; i < 100; i++) {
    //   this.items.push({ label: 'Item ' + (i + 1), value: (i + 1) });
    // }

    this.countries = [
      {
        value: 1,
        label: 'Australia',
        code: 'AU',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      },
      {
        value: 2,
        label: 'Brazil',
        code: 'BR',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      },
      {
        value: 3,
        label: 'China',
        code: 'CN',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      },
      {
        value: 4,
        label: 'Egypt',
        code: 'EG',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      },
      {
        value: 5,
        label: 'France',
        code: 'FR',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      },
      {
        value: 6,
        label: 'Germany',
        code: 'DE',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      },
      {
        value: 7,
        label: 'India',
        code: 'IN',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      },
      {
        value: 8,
        label: 'Japan',
        code: 'JP',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      },
      {
        value: 9,
        label: 'Spain',
        code: 'ES',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      },
      {
        value: 10,
        label: 'United States',
        code: 'US',
        image: {
          imagePath: 'assets/images/Flag_of_Jordan.png',
          width: '20px',
          height: '12px'
        }
      }
    ];
    this.countryId = 1;
  }
  onTextChange(event: any) {
    setTimeout(() => {
      this.suggestions = this.items.filter(p => p.label.concat(event));
    }, 1000);
  }

  onSelect(event: any) {
    console.log('onSelect', event)
    this.selectedItems = event;
  }

  onDropdownClick() {
    console.log('onDropdownClick')

  }

  onLazyLoad(event: any) {
    const { first, last } = event;
    let items: any[] = [];
    for (let i = first; i < last; i++) {
      items.push(this.items[i]);
    }
    this.items = [...items];
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
