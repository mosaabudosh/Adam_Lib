import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { AdamFileUploaderComponent } from './adam-file-uploader.component';
import { TooltipModule } from 'primeng/tooltip';
import { AdamButtonModule } from '../adam-button/adam-button.module';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [AdamFileUploaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TooltipModule,
    AdamButtonModule,
    FileUploadModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
  ],
  exports: [AdamFileUploaderComponent],
  providers: [TranslateService]
})
export class AdamFileUploaderModule { }
function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}