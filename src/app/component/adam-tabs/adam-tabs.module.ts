import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { AdamTabsComponent } from './adam-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: AdamTabsComponent,
  }
];

@NgModule({
  declarations: [AdamTabsComponent],
  exports: [AdamTabsComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamTabsModule { }
