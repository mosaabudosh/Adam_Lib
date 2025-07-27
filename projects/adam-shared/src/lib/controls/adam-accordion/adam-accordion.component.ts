import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-adam-accordion',
  templateUrl: './adam-accordion.component.html',
  styleUrl: './adam-accordion.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamAccordionComponent {
  @Input() customClass: string;
  @Input() expandIcon: string = 'pi pi-plus';
  @Input() collapseIcon: string = 'pi pi-minus';
  @Input() iconPos: 'end' | 'start' = 'end';
  _selected: boolean;
  @Input() set selected(value: boolean) {
    this._selected = value;
  }
  @Input() isViewCustomHeader: boolean = false;
  @Input("customHeaderElementRef") customHeaderElementRef?: any;
  @Input() isViewCustomContent: boolean = false;
  @Input("customContentElementRef") customContentElementRef?: any;
  @Input() isViewCustomResult: boolean = false;
  @Input("customResultElementRef") customResultElementRef?: any;


  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onOpen: EventEmitter<any> = new EventEmitter();
  @Output() activeIndexChange: EventEmitter<any> = new EventEmitter();
}
