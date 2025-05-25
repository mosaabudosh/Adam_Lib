import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { PickListComponent } from './adam-pick-list.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PickListComponent,
  }
];

@NgModule({
  declarations: [PickListComponent],
  exports: [PickListComponent],
  imports: [
    CommonModule,
    AdamSharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamPickListModule { }
