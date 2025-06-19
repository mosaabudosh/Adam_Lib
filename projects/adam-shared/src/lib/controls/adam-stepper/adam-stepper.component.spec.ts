import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamStepperComponent } from './adam-stepper.component';

describe('AdamStepperComponent', () => {
  let component: AdamStepperComponent;
  let fixture: ComponentFixture<AdamStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
