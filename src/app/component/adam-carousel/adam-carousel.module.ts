import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AdamCarouselComponent } from './adam-carousel.component';

const routes: Routes = [
  {
    path: '',
    component: AdamCarouselComponent,
  }
];

@NgModule({
  declarations: [AdamCarouselComponent],
  exports: [AdamCarouselComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamCarouselModule { }
