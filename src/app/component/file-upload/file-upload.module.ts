import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamSharedModule } from 'adam-shared';
import { FileUploadComponent } from './file-upload.component';

const routes: Routes = [
  {
    path: '',
    component: FileUploadComponent,
  }
];

@NgModule({
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
  imports: [
    AdamSharedModule,
    RouterModule.forChild(routes),
  ],
})
export class FileUploadModule { }
