import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamSkeletonComponent } from './adam-skeleton.component';

describe('AdamSkeletonComponent', () => {
  let component: AdamSkeletonComponent;
  let fixture: ComponentFixture<AdamSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
