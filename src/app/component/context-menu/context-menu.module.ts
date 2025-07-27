import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { ContextMenuComponent } from './context-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ContextMenuComponent,
  }
];

@NgModule({
  declarations: [ContextMenuComponent],
  exports: [ContextMenuComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class ContextMenuModule { }
