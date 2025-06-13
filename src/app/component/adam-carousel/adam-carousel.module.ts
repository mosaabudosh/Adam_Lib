import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    AdamSharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamCarouselModule { }
