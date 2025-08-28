import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adam-data-view',
  templateUrl: './adam-data-view.component.html',
  styleUrl: './adam-data-view.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamDataViewComponent {
  _products: any[] = [];
  @Input() set products(value: any[]) {
    this._products = value;
    if (this._products && this._products.length > 0) {
      this._numSkeleton = 0;
      this.fillSkeletons();
    }
  }
  _sortOptions!: any[];
  @Input() set sortOptions(value: any[]) {
    this._sortOptions = value;
  }
  @Input() sortField!: string;
  @Input() sortKey!: string;
  @Input() sortOrder!: number;
  @Input() layout: 'list' | 'grid' = 'grid';
  @Input() color: string = "waring";
  @Input() imageWidth: string = "200";
  @Input() imageHeight: string = "170";
  @Input() isViewImageTooltip: boolean = false;
  @Input() isPreviewImage: boolean = false;
  @Input() imageBorderRadius: string = "5%";
  @Input() tooltipPosition: string = 'top';
  @Input() isViewCategory: boolean = false;
  @Input() isViewName: boolean = false;
  @Input() isViewDescription: boolean = false;
  @Input() isViewPrice: boolean = false;
  @Input() isViewFooter: boolean = false;
  @Input() isViewCategoryTooltip: boolean = false;
  @Input() isViewButtonsTooltip: boolean = false;
  @Input() isViewRating: boolean = false;
  @Input() isViewShope: boolean = false;
  @Input() addToCartColor: string = "waring";
  @Input() addToFavoriteColor: string = "waring-reverse";
  @Input() addToCartLabel: string = "Add to cart";
  @Input() addToFavoriteLabel: string = 'Add to favorite';
  @Input() inMyFavoriteLabel: string = 'In my favorite';
  @Input() textAlign: string;
  @Input() colorRating: string = "#F0AD4E";
  @Input() rowSelectedStyle?: any;
  @Input() totalRecords: number = 0;
  @Input() lazy: boolean = false;
  @Input() rowsNumber: number = 5;
  @Input() showCurrentPageReport: boolean = false;
  @Input() paginator: boolean = false;
  @Input() isShowFirstLastIcon: boolean = false;
  @Input() loading: boolean;
  @Input() currentPageReportTemplate: string = "Showing {first} to {last} of {totalRecords} entries";
  @Input() rowsPerPageOptions: number[] = [5, 6, 10, 12, 20, 24, 50, 48, 100];
  @Input() emptyMessage: string = "No records found";
  @Input() paginatorPosition: 'top' | 'bottom' | 'both' = "bottom";
  @Input() isViewSortOptions: boolean = true;

  pageInfo: any = {
    pageNumber: 0,
    pageSize: 0
  }
  first = 0;
  @Input() isViewCustomHeader: boolean = false;
  @Input("customHeaderElementRef") customHeaderElementRef?: any;
  @Input() isViewCustomListData: boolean = false;
  @Input("customListDataElementRef") customListDataElementRef?: any;
  @Input() isViewCustomGridData: boolean = false;
  @Input("customGridDataElementRef") customGridDataElementRef?: any;
  _skeletonWidth: string = "200px";
  @Input() set skeletonWidth(value: string) {
    this._skeletonWidth = value;
  }
  _skeletonHeight: string = "300px";
  @Input() set skeletonHeight(value: string) {
    this._skeletonHeight = value;
  }
  _skeletonBorderRadius: string = "5px";
  @Input() set skeletonBorderRadius(value: string) {
    this._skeletonBorderRadius = value;
  }
  _skeletonShape: string;
  @Input() set _skeletonShap(value: string) {
    this._skeletonShape = value;
  }

  skeletons: any[] = [];
  _numSkeleton: number = 5;
  @Input() set numSkeleton(value: number) {
    this._numSkeleton = value;
    this.fillSkeletons();
  }
  @Input() isViewLayoutOptions: boolean = true;
  @Output() onAddToCart = new EventEmitter();
  @Output() onAddToFavorite = new EventEmitter();
  @Output() pageChanged = new EventEmitter();
  @Output() onCardClick = new EventEmitter();

  constructor() {
    this.fillSkeletons();
  }

  fillSkeletons() {
    this.skeletons = [];
    for (let index = 0; index < this._numSkeleton; index++) {
      this.skeletons.push(index);
    }
  }

  onSortChange(event: any) {
    let value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onChangeLayout(event: any) {
    this.layout = event.layout;
  }

  onPaginateChange(event: any) {
    this.first = event.first;
    this.pageInfo.pageNumber = event.first / event.rows;
    this.pageInfo.pageSize = event.rows;
    this.pageChanged.emit(this.pageInfo);
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

  loadLazy(event: any) {
    if (event?.sortField) {
      this.onSort(event.sortField, event.sortOrder);
    }
  }

}
