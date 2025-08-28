import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { BreadcrumbComponent } from './breadcrumb.component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbComponent,
  }
];

@NgModule({
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class BreadcrumbModule { }
