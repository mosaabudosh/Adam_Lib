import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AdamButtonComponent } from './adam-button.component';

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
    CommonModule,
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
  
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AdamButtonModule { }
