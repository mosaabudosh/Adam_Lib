import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AdamCalendarComponent } from './adam-calendar.component';

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
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamCalendarModule { }
