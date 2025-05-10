import { Component, ViewContainerRef } from '@angular/core';
import { AdamLibTestService } from '../../service/adam-lib-test.service';
import { AdamPopupComponent } from '../adam-popup/adam-popup.component';
import { AdamMessageService, ComponentFactoryResolverService } from 'adam-shared';

@Component({
  selector: 'tabel',
  standalone: false,
  templateUrl: './tabel.component.html',
  styleUrl: './tabel.component.scss'
})
export class TabelComponent {
  columns: any[] = [];
  items: any[] = [];
  icons: any[] = [];

  columns2: any[] = [];
  items2: any[] = [];
  items3: any[] = [];


  constructor(private adamLibTestService: AdamLibTestService,
    private componentFactoryResolverService: ComponentFactoryResolverService,
    public viewContainerRef: ViewContainerRef,
    private _adamMessageService: AdamMessageService) {
    this.getUsers();
    this.columns = [
      { field: "Col1", header: "Col 1" },
      { field: "Col2", header: "Col 2" },
      { field: "Col3", header: "Col 3" },
      { field: "Col4", header: "Col 4" },
      { field: "Col5", header: "Col 5" },
    ];
    this.items = [
      {
        'Col1': "Col11",
        'Col2': "Col11",
        'Col3': "Col11",
        'Col4': "Col11",
        'Col5': "Col11",
        "icons": this.generateIcons()
      },
      {
        'Col1': "Col11",
        'Col2': "Col11",
        'Col3': "Col11",
        'Col4': "Col11",
        'Col5': "Col11",
        "icons": this.generateIcons()
      }
    ];

    this.columns2 = [
      { field: "imagePath", header: "Image", isHasImage: true, imagePath: 'image' },
      { field: "mobileNumber", header: "Col 2" },
      { field: "firstName", header: "Col 3" },
      { field: "email", header: "Col 4" },
      { field: "Col5", header: "Col 5" },
    ];
    this.items2 = [
      {
        'image': '../assets/images/dark-background-image.jpg',
        'Col2': "Col11",
        'Col3': "Col11",
        'Col4': "Col11",
        'Col5': "Col11",
      },
      {
        'image': '../assets/images/normal-background-image.jpg',
        'Col2': "Col11",
        'Col3': "Col11",
        'Col4': "Col11",
        'Col5': "Col11",
      }
    ]
  }

  generateIcons(info?: any) {
    let icons = [
      {
        icon: 'pi pi-eye',
        tooltip: "View",
        color: 'white',
        visible: true,
        // command: (event: any) => {
        //   this.viewUser(info.userId)
        // }
      },
      {
        icon: 'pi pi-user-edit',
        tooltip: "Edit",
        color: 'white',
        visible: true,
        // command: (event: any) => {
        //   this.editUser(info.userId)
        // }
      },
      {
        icon: 'pi pi-lock',
        tooltip: "Lock",
        color: 'white',
        visible: true,
        // command: (event: any) => {
        //   this.lockUnLockUser(info.userId)
        // }
      },
      {
        icon: 'pi pi-unlock',
        tooltip: "Unlock",
        color: 'white',
        visible: true,
        // command: (event: any) => {
        //   this.lockUnLockUser(info.userId)
        // }
      },
      {
        icon: 'pi pi-trash',
        tooltip: "Delete",
        color: 'dangerous',
        visible: true,
        // command: (event: any) => {
        //   this.deleteUser(info.userId)
        // }
      }
    ];
    return icons.filter(p => p.visible);
  }

  addUser() {
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


  getUsers() {
    this.adamLibTestService.getUsers().subscribe(response => {
      this.items3 = response.dataObject;
    }
    )
  }


}
