import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { StepperComponent } from './stepper.component';

const routes: Routes = [
  {
    path: '',
    component: StepperComponent,
  }
];

@NgModule({
  declarations: [StepperComponent],
  exports: [StepperComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class StepperModule { }
