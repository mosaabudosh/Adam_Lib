import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { PaginatorComponent } from './paginator.component';

const routes: Routes = [
  {
    path: '',
    component: PaginatorComponent,
  }
];

@NgModule({
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class PaginatorModule { }
