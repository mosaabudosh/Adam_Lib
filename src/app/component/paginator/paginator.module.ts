import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { PaginatorComponent } from './paginator.component';
import { FormsModule } from '@angular/forms';

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
    CommonModule,
    AdamSharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class PaginatorModule { }
