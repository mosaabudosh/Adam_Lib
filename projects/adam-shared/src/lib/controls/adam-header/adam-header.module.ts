import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdamHeaderComponent } from './adam-header.component';
import { MenuModule } from 'primeng/menu';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [AdamHeaderComponent],
  imports: [
    CommonModule,
    MenuModule,
    TooltipModule,
    BadgeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
  ],
  exports: [AdamHeaderComponent],
  providers: [TranslateService]
})
export class AdamHeaderModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
