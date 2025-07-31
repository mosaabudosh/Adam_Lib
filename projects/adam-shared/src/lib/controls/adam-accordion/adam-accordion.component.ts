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
  _isViewCustomHeader: boolean;
  @Input() set isViewCustomHeader(value: boolean) {
    this._isViewCustomHeader = value;
  }
  @Input("customHeaderElementRef") customHeaderElementRef?: any;
  _isViewCustomContent: boolean;
  @Input() set isViewCustomContent(value: boolean) {
    this._isViewCustomContent = value;
  }
  @Input("customContentElementRef") customContentElementRef?: any;
  _isViewAccordionTab: boolean = true;
  @Input() set isViewAccordionTab(value: boolean) {
    this._isViewAccordionTab = value;
  }
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onOpen: EventEmitter<any> = new EventEmitter();
  @Output() activeIndexChange: EventEmitter<any> = new EventEmitter();
}
