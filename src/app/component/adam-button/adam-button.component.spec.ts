import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamButtonComponent } from './adam-button.component';

describe('AdamButtonComponent', () => {
  let component: AdamButtonComponent;
  let fixture: ComponentFixture<AdamButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
