import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adam-paginator',
  templateUrl: './adam-paginator.component.html',
  styleUrl: './adam-paginator.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamPaginatorComponent {

  @Input() pageSize: number = 100;
  @Input() totalRecords: number;
  @Input() rowsPerPageOptions: any = [5, 10, 20, 50, 100];
  @Input() currentPageReportTemplate: string = "Showing {first} to {last} of {totalRecords} entries";
  @Input() showCurrentPageReport: boolean = true;
  @Input() showJumpToPageDropdown: boolean = false;
  @Input() showPageLinks: boolean = false;

  first = 0;

  @Output() onPageChange = new EventEmitter();

  constructor() { }

  paginate(event: any) {
    this.pageSize = event.rows;
    this.onPageChange.emit(event);
  }

}
