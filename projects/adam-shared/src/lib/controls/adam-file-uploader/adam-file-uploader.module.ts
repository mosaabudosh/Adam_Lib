import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdamFileUploaderComponent } from './adam-file-uploader.component';
import { TooltipModule } from 'primeng/tooltip';
import { AdamButtonModule } from '../adam-button/adam-button.module';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [AdamFileUploaderComponent],
  imports: [
    CommonModule,
    TooltipModule,
    AdamButtonModule,
    FileUploadModule,
  ],
  exports: [AdamFileUploaderComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AdamFileUploaderModule { }
