import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adam-lib-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SideMenuComponent {
  searchText: any;
  @Input() isEnabelTooltip: boolean = true;
  @Input() isSimpelMenu: boolean = false;
  @Input() emptyMessage: any = "No data available , check server connection";
  _isClosedMenu: boolean;
  @Input() set isClosedMenu(value: boolean) {
    this._isClosedMenu = value;
    // if (window.innerWidth < 2200 && window.innerWidth > 1700) {
    //   this._isClosedMenu = true;
    // }
  }
  _items: any[] = [];
  mainMenu: any[] = [];

  @Input() set items(value: any[]) {
    value?.map(p => {
      if (p.isActive || p.items.find((a: any) => a.isActive) || (p.items.find((a: any) => a.items != null && a.items.find((x: any) => x.isActive)))) {
        p.expanded = true;
      } else {
        p.expanded = false;
      }
    })
    this._items = [...value];
    this.mainMenu = this._items;
  }
  @Output() onChangeClosedMenu = new EventEmitter();

  openClose() {
    this._isClosedMenu = !this._isClosedMenu;
    this.onChangeClosedMenu.emit(this._isClosedMenu);
  }

  onMenuClick(item: any) {
    // console.log(item)
  }

  onSearchChange(event: any) {
    this.searchText = event.target.value;
  }

}
