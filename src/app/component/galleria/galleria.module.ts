import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { GalleriaComponent } from './galleria.component';

const routes: Routes = [
  {
    path: '',
    component: GalleriaComponent,
  }
];

@NgModule({
  declarations: [GalleriaComponent],
  exports: [GalleriaComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class GalleriaModule { }
