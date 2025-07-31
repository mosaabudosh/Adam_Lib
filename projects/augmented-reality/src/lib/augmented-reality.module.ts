import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARViewComponent } from './component/arview/arview.component';



@NgModule({
  declarations: [
    ARViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ARViewComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AugmentedRealityModule { }
