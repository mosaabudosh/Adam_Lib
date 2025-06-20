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
  }
  responsiveOptions: any[] = [];
  @Input() color: string = "primary";
  @Input() isViewCarousel: boolean = false;
  @Input("carouselElementRef") carouselElementRef?: any;
  @Input() width: string = "1575px";
  @Input() isPreviewImage: boolean = false;
  @Input() imageBorderRadius: string = "5%";
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

  @Output() onAddToCart = new EventEmitter();
  @Output() onAddToFavorite = new EventEmitter();
  @Output() onCardClick = new EventEmitter();

  ngOnInit(): void {
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
}
