import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  {
    path: "button",
    loadChildren: () =>
      import(
        "./component/adam-button/adam-button.module"
      ).then((m) => m.AdamButtonModule),
  },
  {
    path: "toast",
    loadChildren: () =>
      import(
        "./component/adam-toast/adam-toast.module"
      ).then((m) => m.AdamToastModule),
  },
  {
    path: "form",
    loadChildren: () =>
      import(
        "./component/adam-form/adam-form.module"
      ).then((m) => m.AdamFormModule),
  },
  {
    path: "tabel",
    loadChildren: () =>
      import(
        "./component/adam-tabel/tabel.module"
      ).then((m) => m.TabelModule),
  },
  {
    path: "calendar",
    loadChildren: () =>
      import(
        "./component/adam-calendar/adam-calendar.module"
      ).then((m) => m.AdamCalendarModule),
  },
  {
    path: "checkbox",
    loadChildren: () =>
      import(
        "./component/adam-checkbox/adam-checkbox.module"
      ).then((m) => m.AdamCheckboxModule),
  },
  {
    path: "file-uploader",
    loadChildren: () =>
      import(
        "./component/file-upload/file-upload.module"
      ).then((m) => m.FileUploadModule),
  },
  {
    path: "pick-list",
    loadChildren: () =>
      import(
        "./component/adam-pick-list/adam-pick-list.module"
      ).then((m) => m.AdamPickListModule),
  },
  {
    path: "tabs",
    loadChildren: () =>
      import(
        "./component/adam-tabs/adam-tabs.module"
      ).then((m) => m.AdamTabsModule),
  },
  {
    path: "paginator",
    loadChildren: () =>
      import(
        "./component/paginator/paginator.module"
      ).then((m) => m.PaginatorModule),
  },
  {
    path: "image",
    loadChildren: () =>
      import(
        "./component/images/images.module"
      ).then((m) => m.ImagesModule),
  },
  {
    path: "galleria",
    loadChildren: () =>
      import(
        "./component/galleria/galleria.module"
      ).then((m) => m.GalleriaModule),
  },
  {
    path: "carousel",
    loadChildren: () =>
      import(
        "./component/adam-carousel/adam-carousel.module"
      ).then((m) => m.AdamCarouselModule),
  },
  {
    path: "otp",
    loadChildren: () =>
      import(
        "./component/input-otp/input-otp.module"
      ).then((m) => m.InputOtpModule),
  },
  {
    path: "stepper",
    loadChildren: () =>
      import(
        "./component/stepper/stepper.module"
      ).then((m) => m.StepperModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
