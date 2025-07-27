import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamRatingComponent } from './adam-rating.component';

describe('AdamRatingComponent', () => {
  let component: AdamRatingComponent;
  let fixture: ComponentFixture<AdamRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
