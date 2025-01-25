import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamCalendarComponent } from './adam-calendar.component';
import { AdamCalendarModule } from './adam-calendar.module';

describe('AdamCalendarComponent', () => {
  let component: AdamCalendarComponent;
  let fixture: ComponentFixture<AdamCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamCalendarComponent],
      imports: [AdamCalendarModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdamCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
