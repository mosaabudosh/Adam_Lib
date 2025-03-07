import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdamSearchBoxComponent } from './adam-search-box.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [AdamSearchBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
  ],
  exports: [AdamSearchBoxComponent],
  providers: [TranslateService],
})
export class AdamSearchBoxModule { }
function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}