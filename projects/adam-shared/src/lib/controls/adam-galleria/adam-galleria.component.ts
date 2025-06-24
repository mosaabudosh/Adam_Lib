import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'adam-galleria',
  templateUrl: './adam-galleria.component.html',
  styleUrl: './adam-galleria.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamGalleriaComponent {

  _images: any[] | undefined;
  responsiveOptions: any[] | undefined;
  @Input() set images(value: any[] | undefined) {
    this._images = value;
  };
  @Input() showIndicators: boolean = false;
  @Input() showThumbnails: boolean = true;
  @Input() changeItemOnIndicatorHover: boolean = false;
  @Input() displayBasic: boolean = false;
  @Input() circular: boolean = false;
  @Input() fullScreen: boolean = false;
  @Input() showItemNavigators: boolean = false;
  @Input() showIndicatorsOnItem: boolean = false;
  @Input() viewCaption: boolean = false;
  @Input() isPreviewImage: boolean = true;
  @Input() isBorderRadius: boolean = true;
  @Input() indicatorsPosition: 'bottom' | 'top' | 'left' | 'right' | undefined = 'bottom';
  @Input() thumbnailsPosition: 'bottom' | 'top' | 'left' | 'right' | undefined = 'bottom';
  @Input() width: string = '640px';

  @Input() imageBorderRadius: string = '2%';
  @Input() height: string;
  @Input() numVisible: number = 2;
  @Input() widthThumbnailImage: string = '100';
  @Input() heightThumbnailImage: string = '100';
  @Input() thumbnailImageBorderRadius: string = '2%';
  @Input() isThumbnailPreviewImage: boolean = false;

  getContainerStyle() {
    return {
      'max-width': this.width,
      'min-width': this.width,
      'max-height': this.height,
      'min-height': this.height
    }
  }
}
