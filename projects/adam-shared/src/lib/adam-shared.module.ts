import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessageService } from 'primeng/api';
import { AdamMessageService } from './services/adam.message.service';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from "primeng/fileupload";
import { IntInputDirective } from './directive/int-input.directive';
import { DecimalInputDirective } from './directive/decimal-input.directive';
import { UrlValidatorDirective } from './directive/validators/urlValidatorDirective';
import { PhoneNumberValidatorDirective } from './directive/validators/phoneNumberValidatorDirective';
import { emailValidatorDirective } from './directive/validators/emailValidatoreDirective';
import { MustMatchDirective } from './directive/must-match.directive';
import { InvalidControlScrollDirective } from './directive/invalid-control-scroll.directive';
import { ArabicNumberPipe } from './pipe/arabic-number.pipe';
import { NumberPipe } from './pipe/numbers.pipe';
import { MathPipe } from './pipe/math.pipe';
import { AdamHeaderComponent } from './controls/adam-header/adam-header.component';
import { ButtonComponent } from './controls/adam-button/button.component';
import { AdamCalendarComponent } from './controls/adam-calendar/adam-calendar.component';
import { AdamCheckboxComponent } from './controls/adam-checkbox/adam-checkbox.component';
import { AdamDropdownComponent } from './controls/adam-dropdown/adam-dropdown.component';
import { AdamIconsComponent } from './controls/adam-icons/adam-icons.component';
import { AdamLabelComponent } from './controls/adam-label/adam-label.component';
import { AdamTabelComponent } from './controls/adam-tabel/adam-tabel.component';
import { AdamTextBoxComponent } from './controls/adam-text-box/adam-text-box.component';
import { AdamToastComponent } from './controls/adam-toast/adam-toast.component';
import { SideMenuComponent } from './controls/side-menu/side-menu.component';
import { AdamSearchBoxComponent } from './controls/adam-search-box/adam-search-box.component';
import { ComponentFactoryResolverService } from './services/component-factory-resolver.service';
import { AdamSheardPopupComponent } from './controls/adam-sheard-popup/adam-sheard-popup.component';
import { AdamFileUploaderComponent } from './controls/adam-file-uploader/adam-file-uploader.component';
import { ConfirmationPopupComponent } from './controls/confirmation-popup/confirmation-popup.component';
import { TranslateModule } from '@ngx-translate/core';
import { AdamTextareaComponent } from './controls/adam-textarea/adam-textarea.component';
import { BadgeModule } from 'primeng/badge';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { SortIcon, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { SideMenuFilterPipe } from './pipe/side-menu-filter.pipe';
import { AdamPickListComponent } from './controls/adam-pick-list/adam-pick-list.component';
import { TabViewModule } from 'primeng/tabview';
import { PickListModule } from 'primeng/picklist';
import { AdamTabsComponent } from './controls/adam-tabs/adam-tabs.component';
import { PaginatorModule } from 'primeng/paginator';
import { AdamPaginatorComponent } from './controls/adam-paginator/adam-paginator.component';
import { AdamTreeTableComponent } from './controls/adam-tree-table/adam-tree-table.component';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { ImageModule } from 'primeng/image';
import { AdamImageComponent } from './controls/adam-image/adam-image.component';
import { AdamGalleriaComponent } from './controls/adam-galleria/adam-galleria.component';
import { GalleriaModule } from 'primeng/galleria';
import { AdamMasterDetailTabelComponent } from './controls/adam-master-detail-tabel/adam-master-detail-tabel.component';
import { IconFieldModule } from 'primeng/iconfield';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { AdamCarouselViewComponent } from './controls/adam-carousel-view/adam-carousel-view.component';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    IntInputDirective,
    DecimalInputDirective,
    UrlValidatorDirective,
    PhoneNumberValidatorDirective,
    emailValidatorDirective,
    MustMatchDirective,
    InvalidControlScrollDirective,
    ArabicNumberPipe,
    NumberPipe,
    MathPipe,
    SideMenuFilterPipe,
    AdamSheardPopupComponent,
    ConfirmationPopupComponent,
    AdamTextareaComponent,
    AdamHeaderComponent,
    ButtonComponent,
    AdamCalendarComponent,
    AdamCheckboxComponent,
    AdamDropdownComponent,
    AdamIconsComponent,
    AdamLabelComponent,
    AdamTabelComponent,
    AdamTextBoxComponent,
    AdamToastComponent,
    SideMenuComponent,
    AdamSearchBoxComponent,
    AdamFileUploaderComponent,
    AdamPickListComponent,
    AdamTabsComponent,
    AdamPaginatorComponent,
    AdamTreeTableComponent,
    AdamImageComponent,
    AdamGalleriaComponent,
    AdamMasterDetailTabelComponent,
    AdamCarouselViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    TooltipModule,
    InputSwitchModule,
    FileUploadModule,
    BadgeModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    TableModule,
    ToastModule,
    PickListModule,
    TabViewModule,
    TranslateModule,
    PaginatorModule,
    TreeTableModule,
    TreeModule,
    TreeSelectModule,
    ImageModule,
    GalleriaModule,
    IconFieldModule,
    ToggleButtonModule,
    RippleModule,
    CarouselModule,
    TagModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MenuModule,
    TooltipModule,
    InputSwitchModule,
    FileUploadModule,
    BadgeModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    TableModule,
    ToastModule,
    PickListModule,
    TabViewModule,
    TranslateModule,
    PaginatorModule,
    TreeTableModule,
    TreeModule,
    TreeSelectModule,
    ImageModule,
    GalleriaModule,
    IconFieldModule,
    ToggleButtonModule,
    RippleModule,
    TagModule,
    CarouselModule,
    IntInputDirective,
    DecimalInputDirective,
    UrlValidatorDirective,
    PhoneNumberValidatorDirective,
    emailValidatorDirective,
    MustMatchDirective,
    InvalidControlScrollDirective,
    ArabicNumberPipe,
    NumberPipe,
    MathPipe,
    AdamHeaderComponent,
    ButtonComponent,
    AdamCalendarComponent,
    AdamCheckboxComponent,
    AdamDropdownComponent,
    AdamIconsComponent,
    AdamLabelComponent,
    AdamTabelComponent,
    AdamTextBoxComponent,
    AdamToastComponent,
    SideMenuComponent,
    AdamSearchBoxComponent,
    AdamSheardPopupComponent,
    AdamFileUploaderComponent,
    ConfirmationPopupComponent,
    AdamTextareaComponent,
    AdamPickListComponent,
    AdamTabsComponent,
    TooltipModule,
    AdamPaginatorComponent,
    AdamTreeTableComponent,
    AdamImageComponent,
    AdamGalleriaComponent,
    AdamMasterDetailTabelComponent,
    AdamCarouselViewComponent
  ],
  providers: [MessageService, AdamMessageService, ComponentFactoryResolverService, SortIcon, DatePipe, DecimalPipe],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AdamSharedModule { }
