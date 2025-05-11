import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './adam-calendar.component.html',
  styleUrl: './adam-calendar.component.scss'
})
export class AdamCalendarComponent {
  date: Date | null = null;

}
