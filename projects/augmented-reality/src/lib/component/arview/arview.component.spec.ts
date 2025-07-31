import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARViewComponent } from './arview.component';

describe('ARViewComponent', () => {
  let component: ARViewComponent;
  let fixture: ComponentFixture<ARViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ARViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ARViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
