import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamButtonComponent } from './adam-button.component';
import { AdamSharedModule } from '../../../../projects/adam-shared/src/lib/adam-shared.module';

const routes: Routes = [
  {
    path: '',
    component: AdamButtonComponent,
  }
];

@NgModule({
  declarations: [AdamButtonComponent],
  exports: [AdamButtonComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamButtonModule { }
