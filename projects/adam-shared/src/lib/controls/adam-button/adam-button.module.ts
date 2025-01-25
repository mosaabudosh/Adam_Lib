import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button.component';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    TooltipModule,
    ButtonModule,
    RippleModule
  ],
  exports: [ButtonComponent],
  providers: [],
})
export class AdamButtonModule { }
