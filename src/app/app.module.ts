import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AdamSharedModule } from '../../projects/adam-shared/src/lib/adam-shared.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { AdamSharedModule } from 'adam-shared';
import { FormsModule } from '@angular/forms';
import { AdamHTTPService } from 'adam-http';
import { AdamPopupComponent } from './component/adam-popup/adam-popup.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Languge } from '../../projects/adam-shared/src/lib/enum/enums';

@NgModule({
  declarations: [
    AppComponent,
    AdamPopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AdamSharedModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
  ],
  providers: [
    AdamHTTPService,
    TranslateService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.addLangs([Languge.en, Languge.ar]);
    translate.setDefaultLang(Languge.en);
    translate.use(Languge.en);
  }
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}