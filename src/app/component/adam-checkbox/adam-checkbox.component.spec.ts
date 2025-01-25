import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamCheckboxComponent } from './adam-checkbox.component';

describe('AdamCheckboxComponent', () => {
  let component: AdamCheckboxComponent;
  let fixture: ComponentFixture<AdamCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
