import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamHttpComponent } from './adam-http.component';

describe('AdamHttpComponent', () => {
  let component: AdamHttpComponent;
  let fixture: ComponentFixture<AdamHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
