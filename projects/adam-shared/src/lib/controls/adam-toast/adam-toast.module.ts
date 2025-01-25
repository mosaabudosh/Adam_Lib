import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdamToastComponent } from './adam-toast.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AdamToastComponent],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [AdamToastComponent],
  providers: [MessageService],
})
export class AdamToastModule { }
