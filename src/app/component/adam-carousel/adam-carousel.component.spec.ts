import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamCarouselComponent } from './adam-carousel.component';

describe('AdamCarouselComponent', () => {
  let component: AdamCarouselComponent;
  let fixture: ComponentFixture<AdamCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
