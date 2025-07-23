import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { InputOtpComponent } from './input-otp.component';

const routes: Routes = [
  {
    path: '',
    component: InputOtpComponent,
  }
];

@NgModule({
  declarations: [InputOtpComponent],
  exports: [InputOtpComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class InputOtpModule { }
