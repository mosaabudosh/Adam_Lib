import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ProductCarouselModel } from '../../model/product-carousel-model';
import { CommandType, OrientationCarouselType } from '../../enum/enums';

@Component({
  selector: 'adam-carousel-view',
  templateUrl: './adam-carousel-view.component.html',
  styleUrl: './adam-carousel-view.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamCarouselViewComponent implements OnInit {
  public get commandType(): typeof CommandType {
    return CommandType;
  }
  _products: ProductCarouselModel[] = [];
  @Input() set products(value: ProductCarouselModel[]) {
    this._products = value;
    if (this._products && this._products.length > 0) {
      this._numSkeleton = 0;
      this.fillSkeletons();
    }
  }
  responsiveOptions: any[] = [];
  @Input() color: string = "primary";
  @Input() isViewCarousel: boolean = false;
  @Input("carouselElementRef") carouselElementRef?: any;
  @Input() width: string = "1575px";
  @Input() isPreviewImage: boolean = false;
  _imageBorderRadius: string = "5%";
  @Input() set imageBorderRadius(value: string) {
    this._imageBorderRadius = value;
  }
  @Input() isViewStatus: boolean = false;
  @Input() isViewCategory: boolean = false;
  @Input() isViewName: boolean = false;
  @Input() isViewDescription: boolean = false;
  @Input() isViewPrice: boolean = false;
  @Input() isViewFooter: boolean = true;
  @Input() isViewImageTooltip: boolean = false;
  @Input() isViewCategoryTooltip: boolean = false;
  @Input() isViewButtonsTooltip: boolean = false;
  @Input() tooltipPosition: string = 'top';
  @Input() isViewBorder: boolean = false;
  @Input() isCircular: boolean = false;
  @Input() numVisible: number = 7;
  @Input() numScroll: number = 3;
  @Input() isAutoplayInterval: boolean = false;
  @Input() autoplayInterval: string = "5000";
  @Input() addToCartColor: string = "waring";
  @Input() addToFavoriteColor: string = "waring-reverse";
  @Input() isViewHeader: boolean = false;
  @Input() headerLabel: string = "Header content";
  @Input() orientation: any = OrientationCarouselType.Horizontal;
  @Input() verticalViewPortHeight: string = "350px";
  @Input() emptyData: string = "No data found";
  @Input() imageWidth: string = "200";
  @Input() imageHeight: string = "200";
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
  _numSkeleton: number = 7;
  @Input() set numSkeleton(value: number) {
    this._numSkeleton = value;
    this.fillSkeletons();
  }
  @Input() showIndicators: boolean = true;
  @Input() isCustomColorChevronrighticon: boolean = false;
  @Input() isChangeLocationChevronrighticon: boolean = false;
  @Input() showNavigators: boolean = true;

  @Output() onAddToCart = new EventEmitter();
  @Output() onAddToFavorite = new EventEmitter();
  @Output() onCardClick = new EventEmitter();
  @Output() onPageChange = new EventEmitter();

  ngOnInit(): void {
    this.fillSkeletons();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  fillSkeletons() {
    this.skeletons = [];
    for (let index = 0; index < this._numSkeleton; index++) {
      this.skeletons.push(index);
    }
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }

  onButtonClick(type: number, product: any) {
    if (type == CommandType.Cart) {
      this.onAddToCart.emit(product);
    }
    else if (type == CommandType.Favorite) {
      this.onAddToFavorite.emit(product);
    }
  }

  onPage(event: any) {
    this.onPageChange.emit(event);
  }
}
