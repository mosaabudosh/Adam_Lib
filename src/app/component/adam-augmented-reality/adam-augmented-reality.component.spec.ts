import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamAugmentedRealityComponent } from './adam-augmented-reality.component';

describe('AdamAugmentedRealityComponent', () => {
  let component: AdamAugmentedRealityComponent;
  let fixture: ComponentFixture<AdamAugmentedRealityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamAugmentedRealityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamAugmentedRealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
