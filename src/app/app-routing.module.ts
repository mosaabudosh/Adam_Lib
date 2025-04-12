import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdamToastComponent } from './component/adam-toast/adam-toast.component';
import { AdamButtonComponent } from './component/adam-button/adam-button.component';
import { AdamFormComponent } from './component/adam-form/adam-form.component';
import { TabelComponent } from './component/adam-tabel/tabel.component';
import { AdamCalendarComponent } from './component/adam-calendar/adam-calendar.component';
import { AdamCheckboxComponent } from './component/adam-checkbox/adam-checkbox.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  {
    path: "toast",
    component: AdamToastComponent,
  },
  {
    path: "button",
    component: AdamButtonComponent,
  },
  {
    path: "form",
    component: AdamFormComponent,
  },
  {
    path: "tabel",
    component: TabelComponent,
  },
  {
    path: "calendar",
    component: AdamCalendarComponent,
  },
  {
    path: "checkbox",
    component: AdamCheckboxComponent,
  },
  {
    path: "file-uploader",
    component: FileUploadComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
