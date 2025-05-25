import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-adam-tabs',
  templateUrl: './adam-tabs.component.html',
  styleUrl: './adam-tabs.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamTabsComponent {

  _activeIndex: number = 0;
  @Input() set activeIndex(value: number) {
    this._activeIndex = value;
  }
  _tabs: any[] = [];
  @Input() set tabs(value: any[]) {
    this._tabs = value;
  }
  @Input() scrollable: boolean;
  @Output() onSelectionChanged = new EventEmitter;

  onTabChanged(event: any) {
    this.onSelectionChanged.emit(event?.index);
  }
}
