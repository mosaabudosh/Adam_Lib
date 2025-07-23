import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AdamToastComponent } from './adam-toast.component';

const routes: Routes = [
  {
    path: '',
    component: AdamToastComponent,
  }
];

@NgModule({
  declarations: [AdamToastComponent],
  exports: [AdamToastComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamToastModule { }
