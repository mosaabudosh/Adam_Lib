import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdamSharedModule } from 'adam-shared';
import { MenuComponent } from './menu.component';
import { AdamSharedModule } from '../../../../projects/adam-shared/src/lib/adam-shared.module';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  }
];

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class MenuModule { }
