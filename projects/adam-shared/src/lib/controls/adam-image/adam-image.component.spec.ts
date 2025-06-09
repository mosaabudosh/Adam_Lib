import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamImageComponent } from './adam-image.component';

describe('AdamImageComponent', () => {
  let component: AdamImageComponent;
  let fixture: ComponentFixture<AdamImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
