import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamRadioButtonComponent } from './adam-radio-button.component';

describe('AdamRadioButtonComponent', () => {
  let component: AdamRadioButtonComponent;
  let fixture: ComponentFixture<AdamRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamRadioButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
