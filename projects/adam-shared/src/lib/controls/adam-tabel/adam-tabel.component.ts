import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Column } from '../../model/column';
import { DataTypes } from '../../enum/enums';

@Component({
  selector: 'adam-tabel',
  standalone: false,
  templateUrl: './adam-tabel.component.html',
  styleUrl: './adam-tabel.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe, DecimalPipe],
})
export class AdamTabelComponent implements OnInit {
  @Input() columns: Column[] = [];
  @Input() products: any[] = [];
  @Input() rowsNumber: number = 5;
  @Input() sort: boolean = true;
  @Input() paginator: boolean = true;
  @Input() isShowSearch: boolean = true;
  @Input() isShowaddNew: boolean = true;
  @Input() selection: any;
  @Input() globalFilterFields: string[] = ['name'];
  @Input() enableCheckbox: boolean = true;
  @Input() isShowSummary: boolean = true;
  @Input("commands") commands: any[] = [];
  @Output() onClickAdd: EventEmitter<any> = new EventEmitter();

  constructor(private datePipe: DatePipe, private decimalPipe: DecimalPipe) { }

  ngOnInit() {

  }

  addNew() {
    this.onClickAdd.emit();
  }

  formatTableCellValue(value: any , dataType: any, format: any) {
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

  generateIcons() {
    return [
      {
        icon: 'pi pi-plus',
        tooltip: '',
        color: 'white',
        visible: true,
        command: (event: any) => {
          this.addNew()
        }
      }
    ]

  }
}
