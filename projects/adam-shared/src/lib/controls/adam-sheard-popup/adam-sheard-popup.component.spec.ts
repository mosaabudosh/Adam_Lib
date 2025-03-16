import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamSheardPopupComponent } from './adam-sheard-popup.component';

describe('AdamSheardPopupComponent', () => {
  let component: AdamSheardPopupComponent;
  let fixture: ComponentFixture<AdamSheardPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamSheardPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamSheardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
