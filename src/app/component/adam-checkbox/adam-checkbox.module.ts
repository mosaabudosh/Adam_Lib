import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AdamCheckboxComponent } from './adam-checkbox.component';

const routes: Routes = [
  {
    path: '',
    component: AdamCheckboxComponent,
  }
];

@NgModule({
  declarations: [AdamCheckboxComponent],
  exports: [AdamCheckboxComponent],
  imports: [
    CommonModule,
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamCheckboxModule { }
