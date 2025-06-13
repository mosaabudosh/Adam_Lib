import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { Column } from '../../model/column';
import { DataTypes } from '../../enum/enums';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'adam-master-detail-tabel',
  templateUrl: './adam-master-detail-tabel.component.html',
  styleUrl: './adam-master-detail-tabel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdamMasterDetailTabelComponent {
  _products!: any[];
  @Input() set products(value: any[]) {
    this._products = value;
  }
  @Input() expandedRows = {};
  @Input() columns: Column[] = [];
  @Input() sort: boolean = false;
  @Input() isShowSearch: boolean = false;
  @Input() isShowaddNew: boolean = false;
  @Input() rowHover: boolean = false;
  @Input() rowsNumber: number = 5;
  @Input() showCurrentPageReport: boolean = false;
  @Input() paginator: boolean = false;
  @Input() currentPageReportTemplate: string = "Showing {first} to {last} of {totalRecords} entries";
  @Input() rowsPerPageOptions: number[] = [5, 10, 20, 50, 100];
  @Input() selection: any;
  @Input() globalFilterFields: string[] = ['name'];
  @Input() enableCheckbox: boolean = false;
  @Input() isShowSummary: boolean = false;
  @Input("commands") commands: any[] = [];

  @Input() export: boolean;
  @Input() enableSelection: boolean;
  @Input() enableHeaderSelection: boolean = false;
  @Input() enableSearchonly?: boolean = false;
  @Input() enableSingleSelection: boolean;
  @Input() disabledRowSelection: boolean = false;
  @Input() selectionMode: any;
  @Input() rowSelectedStyle?: any;
  @Input() scrollable: boolean = false;
  @Input() totalRecords: number = 0;
  @Input() lazy: boolean = false;
  @Input() loading: boolean;
  @Input() searchPlaceholder: string = "Search ...";
  @Input() searchWidth: string = "100%";
  @Input() searchHeight: string = "35px";
  @Input() emptyData: string = "No records found";

  pageInfo: any = {
    pageNumber: 0,
    pageSize: 0
  }
  first = 0;
  activeFilterColumn: string = "name";
  @Input() enableAdvanceSearch = false;
  @Input() isViewFooter: boolean = false;
  @Input("footerElementRef") footerElementRef?: any;
  @Input() set resetFirstProperty(value: boolean) {
    if (value) {
      this.first = 0;
    }
  }
  @Input() isViewHeader: boolean = false;
  @Input("headerElementRef") headerElementRef?: any;

  @Input() isEnableReorderRecords: boolean = false;
  @Input() isDisplayReorderColumn: boolean = false;
  @Input() tooltipAdd: string = 'Add';
  @Input() isPreviewImage: boolean = true;
  @Input() imageBorderRadius: string = "50%";


  @Input("detailCommands") detailCommands: any[] = [];
  @Input() detailTitel: string;
  @Input() detailColumns: Column[] = [];
  @Input() detailTotalRecords: number = 0;
  @Input() detailPaginator: boolean = false;


  @Output() rowSelected = new EventEmitter();
  @Output() onRowUnselect = new EventEmitter();
  @Output() headerCheckboxToggleChanged = new EventEmitter();
  @Output() onClickAdd: EventEmitter<any> = new EventEmitter();
  @Output() pageChanged = new EventEmitter();
  @Output() onRowCollapse = new EventEmitter();
  @Output() onRowExpand = new EventEmitter();

  constructor(private datePipe: DatePipe, private decimalPipe: DecimalPipe) { }

  expandAll() {
    this.expandedRows = this._products.reduce((acc, p) => (acc[p.id] = true) && acc, {});
    console.log(this.expandedRows)
  }

  collapseAll() {
    this.expandedRows = {};
  }

  rowExpand(event: TableRowExpandEvent) {
    this.onRowExpand.emit(event);
  }

  rowCollapse(event: TableRowCollapseEvent) {
    this.onRowCollapse.emit(event);
  }

  addNew() {
    this.onClickAdd.emit();
  }

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
    this._products.sort((row1, row2) => {
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

  filterGlobal(event: any, type: string, dt: any) {
    return dt.filterGlobal(event.target.value, type)
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
}
