import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { PickListComponent } from './adam-pick-list.component';

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
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamPickListModule { }
