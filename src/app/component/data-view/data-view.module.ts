import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { DataViewComponent } from './data-view.component';

const routes: Routes = [
  {
    path: '',
    component: DataViewComponent,
  }
];

@NgModule({
  declarations: [DataViewComponent],
  exports: [DataViewComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class DataViewModule { }
