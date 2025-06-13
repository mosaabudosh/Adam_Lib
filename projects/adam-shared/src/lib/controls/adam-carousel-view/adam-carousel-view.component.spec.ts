import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamCarouselViewComponent } from './adam-carousel-view.component';

describe('AdamCarouselViewComponent', () => {
  let component: AdamCarouselViewComponent;
  let fixture: ComponentFixture<AdamCarouselViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamCarouselViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamCarouselViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
