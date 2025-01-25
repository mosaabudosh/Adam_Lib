import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamFormComponent } from './adam-form.component';

describe('AdamFormComponent', () => {
  let component: AdamFormComponent;
  let fixture: ComponentFixture<AdamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
