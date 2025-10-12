import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreensURL } from './enum/enums';

const routes: Routes = [
  { path: '', redirectTo: `/${ScreensURL.Form}`, pathMatch: 'full' },
  {
    path: ScreensURL.Button,
    loadChildren: () =>
      import(
        "./component/adam-button/adam-button.module"
      ).then((m) => m.AdamButtonModule),
  },
  {
    path: ScreensURL.Toast,
    loadChildren: () =>
      import(
        "./component/adam-toast/adam-toast.module"
      ).then((m) => m.AdamToastModule),
  },
  {
    path: ScreensURL.Form,
    loadChildren: () =>
      import(
        "./component/adam-form/adam-form.module"
      ).then((m) => m.AdamFormModule),
  },
  {
    path: ScreensURL.Tabel,
    loadChildren: () =>
      import(
        "./component/adam-tabel/tabel.module"
      ).then((m) => m.TabelModule),
  },
  {
    path: ScreensURL.Calendar,
    loadChildren: () =>
      import(
        "./component/adam-calendar/adam-calendar.module"
      ).then((m) => m.AdamCalendarModule),
  },
  {
    path: ScreensURL.Checkbox,
    loadChildren: () =>
      import(
        "./component/adam-checkbox/adam-checkbox.module"
      ).then((m) => m.AdamCheckboxModule),
  },
  {
    path: ScreensURL.FileUploader,
    loadChildren: () =>
      import(
        "./component/file-upload/file-upload.module"
      ).then((m) => m.FileUploadModule),
  },
  {
    path: ScreensURL.PickList,
    loadChildren: () =>
      import(
        "./component/adam-pick-list/adam-pick-list.module"
      ).then((m) => m.AdamPickListModule),
  },
  {
    path: ScreensURL.Tabs,
    loadChildren: () =>
      import(
        "./component/adam-tabs/adam-tabs.module"
      ).then((m) => m.AdamTabsModule),
  },
  {
    path: ScreensURL.Paginator,
    loadChildren: () =>
      import(
        "./component/paginator/paginator.module"
      ).then((m) => m.PaginatorModule),
  },
  {
    path: ScreensURL.Image,
    loadChildren: () =>
      import(
        "./component/images/images.module"
      ).then((m) => m.ImagesModule),
  },
  {
    path: ScreensURL.Galleria,
    loadChildren: () =>
      import(
        "./component/galleria/galleria.module"
      ).then((m) => m.GalleriaModule),
  },
  {
    path: ScreensURL.Carousel,
    loadChildren: () =>
      import(
        "./component/adam-carousel/adam-carousel.module"
      ).then((m) => m.AdamCarouselModule),
  },
  {
    path: ScreensURL.Otp,
    loadChildren: () =>
      import(
        "./component/input-otp/input-otp.module"
      ).then((m) => m.InputOtpModule),
  },
  {
    path: ScreensURL.Stepper,
    loadChildren: () =>
      import(
        "./component/stepper/stepper.module"
      ).then((m) => m.StepperModule),
  },
  {
    path: ScreensURL.DataView,
    loadChildren: () =>
      import(
        "./component/data-view/data-view.module"
      ).then((m) => m.DataViewModule),
  },
  {
    path: ScreensURL.RadioButton,
    loadChildren: () =>
      import(
        "./component/radio-button/radio-button.module"
      ).then((m) => m.RadioButtonModule),
  },
  {
    path: ScreensURL.ColorPicker,
    loadChildren: () =>
      import(
        "./component/color-picker/color-picker.module"
      ).then((m) => m.ColorPickerModule),
  },
  {
    path: ScreensURL.Accordion,
    loadChildren: () =>
      import(
        "./component/accordion/accordion.module"
      ).then((m) => m.AccordionModule),
  },
  {
    path: ScreensURL.Menu,
    loadChildren: () =>
      import(
        "./component/menu/menu.module"
      ).then((m) => m.MenuModule),
  },
  {
    path: ScreensURL.ContextMenu,
    loadChildren: () =>
      import(
        "./component/context-menu/context-menu.module"
      ).then((m) => m.ContextMenuModule),
  },
  {
    path: ScreensURL.Rating,
    loadChildren: () =>
      import(
        "./component/rating/rating.module"
      ).then((m) => m.RatingModule),
  },
  {
    path: ScreensURL.AugmentedReality,
    loadChildren: () =>
      import(
        "./component/adam-augmented-reality/adam-augmented-reality.module"
      ).then((m) => m.AdamAugmentedRealityModule),
  },
  {
    path: ScreensURL.Breadcrumb,
    loadChildren: () =>
      import(
        "./component/breadcrumb/breadcrumb.module"
      ).then((m) => m.BreadcrumbModule),
  },
  {
    path: ScreensURL.OverlayPanel,
    loadChildren: () =>
      import(
        "./component/overlay-panel/overlay-panel.module"
      ).then((m) => m.OverlayPanelModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
