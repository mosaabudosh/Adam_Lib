import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './adam-calendar.component.html',
  styleUrl: './adam-calendar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamCalendarComponent {
  date: Date | null = null;

}
