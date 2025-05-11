import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AdamTabelComponent } from './adam-tabel.component';
import { TooltipModule } from 'primeng/tooltip';
import { AdamSearchBoxModule } from '../adam-search-box/adam-search-box.module';



// @NgModule({
//   declarations: [AdamTabelComponent],
//   imports: [
//     CommonModule,
//     TableModule,
//     TooltipModule,
//     AdamSearchBoxModule
//   ],
//   exports: [AdamTabelComponent],
//   providers: [],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
// })
export class AdamTabelModule { }
