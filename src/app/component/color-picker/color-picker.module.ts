import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { ColorPickerComponent } from './color-picker.component';

const routes: Routes = [
  {
    path: '',
    component: ColorPickerComponent,
  }
];

@NgModule({
  declarations: [ColorPickerComponent],
  exports: [ColorPickerComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class ColorPickerModule { }
