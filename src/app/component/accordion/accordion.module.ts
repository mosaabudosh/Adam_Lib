import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AccordionComponent } from './accordion.component';

const routes: Routes = [
  {
    path: '',
    component: AccordionComponent,
  }
];

@NgModule({
  declarations: [AccordionComponent],
  exports: [AccordionComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AccordionModule { }
