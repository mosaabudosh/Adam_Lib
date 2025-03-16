import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamPopupComponent } from './adam-popup.component';

describe('AdamPopupComponent', () => {
  let component: AdamPopupComponent;
  let fixture: ComponentFixture<AdamPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
