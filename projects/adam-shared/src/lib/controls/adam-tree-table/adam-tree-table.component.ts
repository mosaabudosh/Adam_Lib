import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Column } from '../../model/column';
import { DataTypes } from '../../enum/enums';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'adam-tree-table',
  templateUrl: './adam-tree-table.component.html',
  styleUrl: './adam-tree-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamTreeTableComponent {

  @Input() sort: boolean = true;
  @Input() enableCheckbox: boolean = true;
  @Input("commands") commands: any[] = [];
  @Input() columns: Column[] = [];
  @Input() rowsNumber: number = 5;
  @Input() showCurrentPageReport: boolean = true;
  @Input() paginator: boolean = true;
  @Input() currentPageReportTemplate: string = "Showing {first} to {last} of {totalRecords} entries";
  @Input() rowsPerPageOptions: number[] = [5, 10, 20, 50, 100];
  @Input() scrollable: boolean = false;
  @Input() totalRecords: number = 0;
  @Input() lazy: boolean = false;
  @Input() loading: boolean;
  @Input() isViewFooter: boolean = false;
  @Input() enableSingleSelection: boolean;
  @Input() enableSelection: boolean;
  @Input() isEnableReorderRecords: boolean = false;
  @Input() emptyData: string = "No records found";

  @Input("footerElementRef") footerElementRef?: any;
  @Input() set resetFirstProperty(value: boolean) {
    if (value) {
      this.first = 0;
    }
  }
  @Input() isViewHeader: boolean = false;
  @Input("headerElementRef") headerElementRef?: any;
  first = 0;
  pageInfo: any = {
    pageNumber: 0,
    pageSize: 0
  }
  _products: TreeNode[] = [];
  @Input() set products(value: TreeNode[]) {
    this._products = value;
  }
  @Input() isShowSearch: boolean = true;
  @Input() isShowaddNew: boolean = true;
  @Input() rowHover: boolean = true;
  @Input() searchPlaceholder: string = "Search ...";
  @Input() searchWidth: string = "100%";
  @Input() searchHeight: string = "35px";
  @Input() tooltipAdd: string = 'Add';
  @Input() isPreviewImage: boolean = true;
  @Input() imageBorderRadius: string = "50%";

  @Output() rowSelected = new EventEmitter();
  @Output() onRowUnselect = new EventEmitter();
  @Output() headerCheckboxToggleChanged = new EventEmitter();
  @Output() onClickAdd: EventEmitter<any> = new EventEmitter();
  @Output() pageChanged = new EventEmitter();

  constructor(private datePipe: DatePipe, private decimalPipe: DecimalPipe) { }

  ngOnInit() { }

  formatTableCellValue(value: any, dataType: any, format: any) {
    if (dataType == null || dataType == undefined) {
      return value;
    }
    if (format == null || format == undefined || format.trim() == "") {
      return value;
    }
    switch (dataType) {
      case DataTypes.Date.toString():
        return this.datePipe.transform(value, format);
        break;
      case DataTypes.Number.toString():
        return this.decimalPipe.transform(value, format);
        break;
      default:
        return value;
        break;
    }
  }

  getColumnLength(columns: any) {
    let length = 0;
    columns.forEach((column: any) => {
      if (column.visible == true || column.visible == undefined) {
        ++length;
      }
    });
    if (this.enableSingleSelection == true || this.enableSelection == true || this.isEnableReorderRecords) {
      length = length + 1;
    }
    return length;
  }

  filterGlobal(event: any, type: string, dt: any) {
    return dt.filterGlobal(event.target.value, type)
  }

  addNew() {
    this.onClickAdd.emit();
  }

  onRowSelect(event: any) {
    this.rowSelected.emit(event.data);
  }

  OnPaginateChange(event: any) {
    this.first = event.first;
    this.pageInfo.pageNumber = event.first / event.rows;
    this.pageInfo.pageSize = event.rows;
    this.pageChanged.emit(this.pageInfo);
  }

  rowUnselected(event: any) {
    this.onRowUnselect.emit(event.data);
  }

  headerCheckboxToggle(event: any) {
    this.headerCheckboxToggleChanged.emit(event);
  }

  loadLazy(event: any) {
    if (event?.sortField) {
      this.onSort(event.sortField, event.sortOrder);
    }
  }

  onSort(fieldName: any, order: any) {
    this._products.sort((row1: any, row2: any) => {
      const val1 = row1[fieldName];
      const val2 = row2[fieldName];
      if (val1 === val2) {
        return 0;
      }
      let result = -1;
      if (val1 > val2) {
        result = 1;
      }
      if (order < 0) {
        result = -result;
      }
      return result;
    });
  }

}
