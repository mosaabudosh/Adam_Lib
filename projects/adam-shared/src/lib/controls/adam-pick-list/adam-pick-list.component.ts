import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { PickList } from 'primeng/picklist';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-adam-pick-list',
  templateUrl: './adam-pick-list.component.html',
  styleUrl: './adam-pick-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamPickListComponent implements OnInit, OnDestroy {

  filterTargetValue: string | null;
  filterSourceValue: string | null;
  targetInterval: any;
  sourceInterval: any;
  _source: any[] = [];
  @Input() set source(value: any[]) {
    this._source = value;
  };
  _target: any[] = [];
  @Input() set target(value: any[]) {
    this._target = value;
  };
  @ViewChild('pickList') pickList: PickList;
  @Input("pickListItem") pickListItem: any;
  @Input() sourceHeader: string = "sourceHeader";
  @Input() targetHeader: string = "targetHeader";
  @Input() sourceFilterPlaceholder: string = "Search";
  @Input() targetFilterPlaceholder: string = "Search";
  @Input() filterBy: string = "name";
  @Input() dragdrop: boolean = false;
  @Input() showTargetControls: boolean = false;
  @Input() showSourceControls: boolean = false;

  @Output() moveToTarget = new EventEmitter();
  @Output() moveToSource = new EventEmitter();
  @Output() moveAllToTarget = new EventEmitter();
  @Output() moveAllToSource = new EventEmitter();
  @Output() onTargetSelect = new EventEmitter();
  @Output() onSourceSelect = new EventEmitter();
  @Output() onSourceFilterChange = new EventEmitter();
  @Output() onTargetFilterChange = new EventEmitter();

  constructor() { }

  ngOnDestroy() {
    this._source = [];
    this._target = [];
  }

  ngOnInit() {
  }

  onMoveToTarget(event: any) {
    this.moveToTarget.emit(event);
  }

  onMoveToSource(event: any) {
    this.moveToSource.emit(event);
  }

  onMoveAllToTarget(event: any) {
    this.moveAllToTarget.emit(event);
  }

  onMoveAllToSource(event: any) {
    this.moveAllToSource.emit(event);
  }

  targetSelected(event: any) {
    this.onTargetSelect.emit(event);
  }

  sourceSelected(event: any) {
    this.onSourceSelect.emit(event);
  }

  onSourceFilter(event: any) {
    if (!event.query || event.query == '') {
      this.filterSourceValue = null;
    } else {
      this.onSourceFilterChange.emit(event.query);
    }
  }

  onTargetFilter(event: any) {
    if (!event.query || event.query == '') {
      this.filterTargetValue = null;
    } else {
      this.onTargetFilterChange.emit(event.query);
    }
  }

}
