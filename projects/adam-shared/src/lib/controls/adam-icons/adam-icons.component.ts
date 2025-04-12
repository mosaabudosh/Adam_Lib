import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adam-lib-icons',
  standalone: false,
  templateUrl: './adam-icons.component.html',
  styleUrl: './adam-icons.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdamIconsComponent {
  _icons: any[] = [];
  @Input() set icons(value: any[]) {
    this._icons = value;
  }
  constructor() {
  }
}
