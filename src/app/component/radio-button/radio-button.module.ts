import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { RadioButtonComponent } from './radio-button.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RadioButtonComponent,
  }
];

@NgModule({
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent],
  imports: [
    CommonModule,
    AdamSharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class RadioButtonModule { }
