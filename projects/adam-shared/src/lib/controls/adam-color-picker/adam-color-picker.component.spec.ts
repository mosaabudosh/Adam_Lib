import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamColorPickerComponent } from './adam-color-picker.component';

describe('AdamColorPickerComponent', () => {
  let component: AdamColorPickerComponent;
  let fixture: ComponentFixture<AdamColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamColorPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
