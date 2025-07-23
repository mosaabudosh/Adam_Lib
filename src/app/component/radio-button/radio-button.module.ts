import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { RadioButtonComponent } from './radio-button.component';

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
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class RadioButtonModule { }
