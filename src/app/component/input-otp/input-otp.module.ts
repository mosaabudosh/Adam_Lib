import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    AdamSharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class InputOtpModule { }
