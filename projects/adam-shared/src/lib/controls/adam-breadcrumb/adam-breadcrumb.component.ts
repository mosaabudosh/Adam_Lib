import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-adam-breadcrumb',
  templateUrl: './adam-breadcrumb.component.html',
  styleUrl: './adam-breadcrumb.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamBreadcrumbComponent {

  @Input() color: string = "dark";
  @Input() home: MenuItem;
  _items: MenuItem[] = [];
  @Input() set items(value: MenuItem[]) {
    this._items = value
  };

  ngOnInit() { }

}
