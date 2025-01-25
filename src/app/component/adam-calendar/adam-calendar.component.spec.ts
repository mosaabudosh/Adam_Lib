import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamCalendarComponent } from './adam-calendar.component';

describe('AdamCalendarComponent', () => {
  let component: AdamCalendarComponent;
  let fixture: ComponentFixture<AdamCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamCalendarComponent]
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
