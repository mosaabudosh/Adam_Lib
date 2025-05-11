import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SideMenuComponent } from './side-menu.component';
import { TooltipModule } from 'primeng/tooltip';
import { AdamSearchBoxModule } from '../adam-search-box/adam-search-box.module';
import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [SideMenuComponent],
//   imports: [
//     CommonModule,
//     TooltipModule,
//     // HttpClientModule,
//     FormsModule,
//     AdamSearchBoxModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       },
//     }),
//   ],
//   exports: [SideMenuComponent],
//   providers: [TranslateService],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
// })
export class AdamSideMenuModule { }
// function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/');
// }