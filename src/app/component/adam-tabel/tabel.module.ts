import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { TabelComponent } from './tabel.component';

const routes: Routes = [
  {
    path: '',
    component: TabelComponent,
  }
];

@NgModule({
  declarations: [TabelComponent],
  exports: [TabelComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class TabelModule { }
