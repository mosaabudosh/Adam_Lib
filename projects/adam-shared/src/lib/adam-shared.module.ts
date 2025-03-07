import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AdamHeaderModule } from './controls/adam-header/adam-header.module';
import { AdamButtonModule } from './controls/adam-button/adam-button.module';
import { AdamCalendarModule } from './controls/adam-calendar/adam-calendar.module';
import { AdamCheckboxModule } from './controls/adam-checkbox/adam-checkbox.module';
import { AdamDropdownModule } from './controls/adam-dropdown/adam-dropdown.module';
import { AdamIconsModule } from './controls/adam-icons/adam-icons.module';
import { AdamLabelModule } from './controls/adam-label/adam-label.module';
import { AdamTabelModule } from './controls/adam-tabel/adam-tabel.module';
import { AdamTextBoxModule } from './controls/adam-text-box/adam-text-box.module';
import { AdamToastModule } from './controls/adam-toast/adam-toast.module';
import { AdamSideMenuModule } from './controls/side-menu/adam-side-menu.module';
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
import { AdamSearchBoxModule } from './controls/adam-search-box/adam-search-box.module';

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
  ],
  imports: [
    FormsModule,
    CommonModule,

    MenuModule,
    TooltipModule,
    InputSwitchModule,
    FileUploadModule,

    AdamHeaderModule,
    AdamButtonModule,
    AdamCalendarModule,
    AdamCheckboxModule,
    AdamDropdownModule,
    AdamIconsModule,
    AdamLabelModule,
    AdamTabelModule,
    AdamTextBoxModule,
    AdamToastModule,
    AdamSideMenuModule,
    AdamSearchBoxModule
  ],
  exports: [
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
    AdamSearchBoxComponent
  ],
  providers: [MessageService, AdamMessageService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]

})
export class AdamSharedModule { }

