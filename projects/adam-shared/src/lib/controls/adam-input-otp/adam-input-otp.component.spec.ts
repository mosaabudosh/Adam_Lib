import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamInputOtpComponent } from './adam-input-otp.component';

describe('AdamInputOtpComponent', () => {
  let component: AdamInputOtpComponent;
  let fixture: ComponentFixture<AdamInputOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamInputOtpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamInputOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
