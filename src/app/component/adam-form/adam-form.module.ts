import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AdamFormComponent } from './adam-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdamFormComponent,
  }
];

@NgModule({
  declarations: [AdamFormComponent],
  exports: [AdamFormComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamFormModule { }
