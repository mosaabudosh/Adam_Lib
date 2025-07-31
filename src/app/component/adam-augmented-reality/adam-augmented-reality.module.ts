import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamAugmentedRealityComponent } from './adam-augmented-reality.component';
// import { AugmentedRealityModule } from 'AugmentedReality';
import { AdamSharedModule } from 'adam-shared';
import { AugmentedRealityModule } from '../../../../projects/augmented-reality/src/public-api';

const routes: Routes = [
  {
    path: '',
    component: AdamAugmentedRealityComponent,
  }
];

@NgModule({
  declarations: [AdamAugmentedRealityComponent],
  exports: [AdamAugmentedRealityComponent],
  imports: [
    AdamSharedModule,
    AugmentedRealityModule,
    RouterModule.forChild(routes),
  ],
})
export class AdamAugmentedRealityModule { }
