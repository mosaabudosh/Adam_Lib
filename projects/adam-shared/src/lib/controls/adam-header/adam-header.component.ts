import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { HeaderDataModel } from '../../model/headerDataModel';

@Component({
  selector: 'adam-lib-header',
  templateUrl: './adam-header.component.html',
  styleUrl: './adam-header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamHeaderComponent {
  _headerDataModel: HeaderDataModel = {};
  @Input() set headerDataModel(value: any) {
    this._headerDataModel = {
      avatarImage: value?.avatarImage,
      logoApp: value?.logoApp,
      isViewMenu: value.isViewMenu,
      isViewLogo: value.isViewLogo,
      userName: value.userName,
      items: value.items,
      icons: value.icons,
    };
  };

  @Output() onMenuClicked = new EventEmitter<any>();
  @Output() onLogoClicked = new EventEmitter<any>();
  menuClicked() {
    this.onMenuClicked.emit();
  }

  onIconClick(info: any) {
    info.command(info);
  }

  logoClicked() {
    this.onLogoClicked.emit();
  }
}
