import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdamHTTPService } from './service/adam.http.service';
import { StorageService } from './service/storage.service';
import { HTTPHandlerManagement } from './service/HTTPHandlerManagement';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AdamHTTPService,
    StorageService,
    HTTPHandlerManagement
  ],
  exports: []
})
export class AdamHttpModule { }
