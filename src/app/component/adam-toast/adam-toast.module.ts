import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AdamToastComponent } from './adam-toast.component';
// import { AdamSharedModule } from '../../../../projects/adam-shared/src/lib/adam-shared.module';

const routes: Routes = [
  {
    path: '',
    component: AdamToastComponent,
  }
];

@NgModule({
  declarations: [AdamToastComponent],
  exports: [AdamToastComponent],
  imports: [
    CommonModule,
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamToastModule { }
