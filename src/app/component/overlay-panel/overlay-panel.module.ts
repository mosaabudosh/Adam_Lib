import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { OverlayPanelComponent } from './overlay-panel.component';

const routes: Routes = [
  {
    path: '',
    component: OverlayPanelComponent,
  }
];

@NgModule({
  declarations: [OverlayPanelComponent],
  exports: [OverlayPanelComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class OverlayPanelModule { }
