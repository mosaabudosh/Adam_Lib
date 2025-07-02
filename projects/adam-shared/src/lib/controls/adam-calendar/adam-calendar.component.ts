import { Component, OnInit, ViewEncapsulation, Input, forwardRef, Output, EventEmitter, OnDestroy, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Time, registerLocaleData } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { LOCALE_ID } from "@angular/core";
import { LocaleSettings } from "primeng/calendar";

registerLocaleData(LOCALE_ID, "ar");

export enum PeriodTypes {
  LastWeek = 1,
  LastMonth = 2,
  StartOfYear = 3
}

@Component({
  selector: 'lib-adam-calendar',
  templateUrl: './adam-calendar.component.html',
  styleUrl: './adam-calendar.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdamCalendarComponent),
      multi: true
    }
  ]
})


export class AdamCalendarComponent implements OnInit, ControlValueAccessor, OnDestroy {
  date: any;
  calenderDisabled: boolean = false;
  periods: any[] = [];
  periodsTranslateStream: any;
  hourFormat: string = "24"
  public inputStyle: object = {};
  public style: object = {};
  localeLang: LocaleSettings;
  language: any;
  doChange: any;
  selectedLanguageTranslateStream: any;
  invalid: boolean;

  @ViewChild("myCalender") myCalender: any;
  @Input() set selectedDate(value: Date) {
    this.date = value;
  }
  _maxDate: Date;
  @Input() set maxDate(value: any) {
    this._maxDate = value ? new Date(value) : value;
  }
  _minDate: Date;
  @Input() set minDate(value: any) {
    this._minDate = value;
  }
  @Input() showTime: boolean = false;
  @Input() showIcon: boolean = true;
  @Input() timeOnly: boolean = false;
  @Input() showButtonBar: boolean = true;
  @Input() id?: string = "test";
  _width: string;
  @Input() set width(value: string) {
    if (value) {
      this._width = value;
    }
  };

  @Input() height: string;
  @Input() placeholder: string = "DD/MM/YYYY";
  @Input() calenderDateFormat?: string = "dd/mm/yy";
  @Input() dateFormat?: string = "dd/MM/yyyy";
  @Input() name: string = "test";
  @Input() icon: string = "pi pi-calendar";
  @Input() inputStyleClass?: any;
  @Input() styleClass?: any;
  @Input() inline: boolean = false;
  @Input() set disabled(value: boolean) { this.calenderDisabled = value; }
  @Input() required: boolean = false;
  @Input() set is24Formate(value: boolean) {
    this.hourFormat = value ? "24" : "12";
  }
  _isDateTime: boolean = false;
  @Input() set isDateTime(value: boolean) {
    this._isDateTime = value;
  }
  _yearRange: string = '';
  @Input() set yearRange(value: any) {
    if (value == undefined || value?.trim().length == 0) {
      let endYear = new Date().getFullYear();
      this._yearRange = "1900:" + endYear;
    } else {
      this._yearRange = value;
    }
  }
  @Input() readOnly: boolean = false;
  @Input() delayTimer?: any = 0;
  @Input() isAllowDelay: boolean = false;
  @Input() isDisplayPeriod: boolean = false;
  @Input() selectedLanguage: string = 'en';
  _submitted: boolean;
  @Input() set submitted(value: boolean) {
    this._submitted = value;
  };
  _marginEnd: any = '0px';
  @Input() set marginEnd(value: any) {
    this._marginEnd = value;
  };
  @Output() onBlur = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onTodayClick = new EventEmitter();
  @Output() onInput = new EventEmitter();
  @Output() onDateCleared = new EventEmitter();

  constructor(
    public translateService: TranslateService) {
    this.getCalendarSetting();
  }

  ngOnDestroy(): void {
    if (this.selectedLanguageTranslateStream) {
      this.selectedLanguageTranslateStream.unsubscribe();
    }
    if (this.periodsTranslateStream) {
      this.periodsTranslateStream.unsubscribe();
    }
  }

  getWidth() {
    let width: any = 0;
    if (this._width && this._width.substring(this._width.length - 2, this._width.length) == 'px') {
      width = `${Number(this._width.substring(0, this._width.length - 2)) + (this.required ? 25 : 0)}px`;
      return width;
    }
    if (this._width && this._width.substring(this._width.length - 1, this._width.length) == '%') {
      width = `${Number(this._width.substring(0, this._width.length - 1))}%`;
      return width;
    }
    return '100%';
  }

  getStyles() {
    return {
      'width': `${this.getWidth()}`,
      'height': this.height,
    };
  }

  getContainerStyle() {
    let width = 0;
    let style = {};
    if (this._width && this._width.substring(this._width.length - 2, this._width.length) == 'px') {
      width = Number(this._width.substring(0, this._width.length - 2));
      style = {
        width: `${width + 50}px`,
        height: this.height
      };
    }
    if (this._width && this._width.substring(this._width.length - 1, this._width.length) == '%') {
      width = Number(this._width.substring(0, this._width.length - 1));
      style = {
        width: `${width}%`,
        height: this.height
      };
    }
    return style;
  }

  getCalendarSetting() {
    this.selectedLanguageTranslateStream = this.translateService.stream("selectedLanguage").subscribe((response) => {
      if (this.selectedLanguage == response.en) {
        this.language = "English";
        this.localeLang = {
          firstDayOfWeek: 0,
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          today: this._isDateTime ? "Now" : "Today",
          clear: "Clear",
          dateFormat: "dd/mm/yyyy",
          weekHeader: "Wk",
        };
      } else if (this.selectedLanguage == response.ar) {
        this.language = "Arabic";
        this.localeLang = {
          firstDayOfWeek: 0,
          dayNames: ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"],
          dayNamesShort: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
          dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
          monthNames: [
            "يناير ",
            " فبراير ",
            " مارس  ",
            " أبريل  ",
            " مايو  ",
            " يونيو  ",
            " يوليو  ",
            " أغسطس  ",
            " سبتمبر ",
            "أكتوبر ",
            " نوفمبر ",
            " ديسمبر "
          ],
          monthNamesShort: [
            "يناير ",
            " فبراير ",
            " مارس  ",
            " أبريل  ",
            " مايو  ",
            " يونيو  ",
            " يوليو  ",
            " أغسطس  ",
            " سبتمبر ",
            "أكتوبر ",
            " نوفمبر ",
            " ديسمبر "
          ],
          today: this._isDateTime ? "الأن" : "اليوم",
          clear: "مسح",
          dateFormat: "dd/mm/yyyy",
          weekHeader: "الأسبوع",
        };
      }
    });
  }

  ngOnInit() {
    if (this._yearRange?.trim().length == 0) {
      let endYear = new Date().getFullYear();
      this._yearRange = "1900:" + endYear;
    }
    this.fillPeriodsDDL();
  }


  getInputStyleClass() {
    return this.inputStyleClass;
  }

  getstyleClass() {
    return this.styleClass;
  }

  selectedChanged(selectedDate: any) {
    if (this._minDate && selectedDate < this._minDate) {
      this.propagateChange(this._minDate);
      this.onSelect.emit(this._minDate)
      return;
    }
    if (!this.timeOnly) {
      this.date = selectedDate;
    }
    else this.date = <Time>selectedDate;

    if (this.isAllowDelay) {
      if (this.doChange) {
        clearTimeout(this.doChange);
      }
      this.doChange = setTimeout(() => {
        this.propagateChange(selectedDate);
        this.onSelect.emit(selectedDate)
      }, this.delayTimer);
    } else {
      this.propagateChange(selectedDate);
      this.onSelect.emit(selectedDate)
    }
  }

  input(date: any) {
    if (!this.timeOnly) {
      this.date = date;
    } else {
      this.date = <Time>date;
    }

    if (this.isAllowDelay) {
      if (this.doChange) {
        clearTimeout(this.doChange);
      }
      this.doChange = setTimeout(() => {
        this.onInput.emit(this.date);
        this.propagateChange(this.date);
      }, this.delayTimer)
    }
    else {
      this.onInput.emit(this.date);
      this.propagateChange(this.date);
    }
  }

  propagateChange = (_: any) => { };

  writeValue(obj: any): void {
    if (obj !== undefined && obj !== null) {
      this.date = <Date>new Date(obj);
    } else {
      this.date = null;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

  blured(event: any) {
    this.onBlur.emit(event);
  }

  todayClick(myCalender: any) {
    this.date = new Date();
    if (this.timeOnly) {
      this.date = <Time>this.date;
    }
    else {
      if (!this.showTime) {
        this.date.setHours(0);
        this.date.setMinutes(0);
        this.date.setSeconds(0);
        this.date.setMilliseconds(0);
      }
    }
    this.propagateChange(this.date);
    this.onTodayClick.emit(this.date);
    myCalender.hideOverlay();
  }

  clearClicked(myCalender: any) {
    this.date = null;
    this.propagateChange(this.date);
    this.onDateCleared.emit();
    myCalender.hideOverlay();
  }

  fillPeriodsDDL = (): void => {
    this.periodsTranslateStream = this.translateService.stream("periodsDDL").subscribe(translation => {
      this.periods = [
        {
          label: translation.lastWeek,
          command: () => {
            this.calculatePeriod(PeriodTypes.LastWeek);
          }
        },
        {
          label: translation.lastMonth,
          command: () => {
            this.calculatePeriod(PeriodTypes.LastMonth);
          }
        },
        {
          label: translation.startOfYear,
          command: () => {
            this.calculatePeriod(PeriodTypes.StartOfYear);
          }
        }
      ];
    });
  }

  calculatePeriod(periodType: PeriodTypes) {
    let currentDate = new Date();
    if (periodType == PeriodTypes.LastWeek) {
      this.date = new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() - 7));
    } else if (periodType == PeriodTypes.LastMonth) {
      this.date = new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() - 30));
    } else {
      this.date = new Date(new Date(currentDate).getFullYear(), 0, 1, 0, 0, 0, 0);
    }

    if (this._maxDate) {
      if (this.date > this._maxDate) {
        this.date = this._maxDate;
      }
    }

    if (this._minDate) {
      if (this.date < this._minDate) {
        this.date = this._minDate;
      }
    }

    this.propagateChange(this.date);
    this.onSelect.emit(this.date);
    this.myCalender.hideOverlay();
  }

  getIsValid() {
    let valid = true;
    if (this.required && this._submitted) {
      valid = this.date != null;
    }
    return valid;
  }

}
