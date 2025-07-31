import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-adam-context-menu',
  templateUrl: './adam-context-menu.component.html',
  styleUrl: './adam-context-menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamContextMenuComponent {
  @Input() customClass: string;
  @Input() target: any;
  _models: any[] = [];
  @Input() set models(value: any[]) {
    this._models = value;
  }
}
