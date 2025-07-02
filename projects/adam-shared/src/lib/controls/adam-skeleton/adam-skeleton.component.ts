import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-adam-skeleton',
  templateUrl: './adam-skeleton.component.html',
  styleUrl: './adam-skeleton.component.scss'
})
export class AdamSkeletonComponent {
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
}
