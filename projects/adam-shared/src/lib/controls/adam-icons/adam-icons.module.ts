import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { AdamIconsComponent } from './adam-icons.component';

@NgModule({
  declarations: [AdamIconsComponent],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [AdamIconsComponent],
  providers: [],
})
export class AdamIconsModule { }
