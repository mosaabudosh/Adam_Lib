import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-adam-menu',
  templateUrl: './adam-menu.component.html',
  styleUrl: './adam-menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamMenuComponent {
  @Input() customClass: string;
  @Input() popup: boolean = true;
  @Input() id: any;
  @Input() target: any;
  _models: any[] = [];
  @Input() set models(value: any[]) {
    this._models = value;
  }

  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();
  @Output() toggle: EventEmitter<any>;

}
