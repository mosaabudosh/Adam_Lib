import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adam-image',
  templateUrl: './adam-image.component.html',
  styleUrl: './adam-image.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamImageComponent {

  @Input() src: any = "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg";
  @Input() previewImageSrc: any = "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg";
  @Input() alt: any = "Image";
  @Input() width: any = "50";
  @Input() height: any = "50";
  @Input() preview: boolean = true;
  @Input() isBorderRadius: boolean = true;
  @Input() imageBorderRadius: string;

}
