import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AdamCalendarComponent } from './adam-calendar.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdamCalendarComponent,
  }
];

@NgModule({
  declarations: [AdamCalendarComponent],
  exports: [AdamCalendarComponent],
  imports: [
    CommonModule,
    AdamSharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamCalendarModule { }
