import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { RatingComponent } from './rating.component';

const routes: Routes = [
  {
    path: '',
    component: RatingComponent,
  }
];

@NgModule({
  declarations: [RatingComponent],
  exports: [RatingComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class RatingModule { }
