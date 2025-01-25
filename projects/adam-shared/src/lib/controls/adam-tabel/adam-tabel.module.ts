import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { AdamTabelComponent } from './adam-tabel.component';
import { AdamIconsModule } from '../adam-icons/adam-icons.module';



@NgModule({
  declarations: [AdamTabelComponent],
  imports: [
    CommonModule,
    TableModule,
    AdamIconsModule
  ],
  exports: [AdamTabelComponent],
  providers: [],
})
export class AdamTabelModule { }
