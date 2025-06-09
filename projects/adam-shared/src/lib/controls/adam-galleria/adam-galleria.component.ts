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
  @Input() position: 'bottom' | 'top' | 'left' | 'right' | undefined = 'bottom';
  @Input() width: string = '640px';
  @Input() numVisible: number = 2;

}
