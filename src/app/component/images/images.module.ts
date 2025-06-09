import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { ImagesComponent } from './images.component';


const routes: Routes = [
  {
    path: '',
    component: ImagesComponent,
  }
];

@NgModule({
  declarations: [ImagesComponent],
  exports: [ImagesComponent],
  imports: [
    CommonModule,
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class ImagesModule { }
