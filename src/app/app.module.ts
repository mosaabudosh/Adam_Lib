import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AdamToastComponent } from './component/adam-toast/adam-toast.component';
import { AdamButtonComponent } from './component/adam-button/adam-button.component';
// import { AdamSharedModule } from '../../projects/adam-shared/src/lib/adam-shared.module';
import { AdamFormComponent } from './component/adam-form/adam-form.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TabelComponent } from './component/adam-tabel/tabel.component';

import { AdamSharedModule } from 'adam-shared';
import { FormsModule } from '@angular/forms';
import { AdamCheckboxComponent } from './component/adam-checkbox/adam-checkbox.component';
import { AdamCalendarComponent } from './component/adam-calendar/adam-calendar.component';
import { AdamHTTPService } from 'adam-http';

@NgModule({
  declarations: [
    AppComponent,
    AdamButtonComponent,
    AdamToastComponent,
    AdamFormComponent,
    TabelComponent,
    AdamCheckboxComponent,
    AdamCalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdamSharedModule,
    AppRoutingModule,
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
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}