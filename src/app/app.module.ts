import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdamToastComponent } from './component/adam-toast/adam-toast.component';
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
import { AdamPopupComponent } from './component/adam-popup/adam-popup.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdamToastComponent,
    AdamFormComponent,
    TabelComponent,
    AdamCheckboxComponent,
    AdamCalendarComponent,
    AdamPopupComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AdamSharedModule,
    AppRoutingModule,
    TranslateModule
  ],
  providers: [
    AdamHTTPService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }