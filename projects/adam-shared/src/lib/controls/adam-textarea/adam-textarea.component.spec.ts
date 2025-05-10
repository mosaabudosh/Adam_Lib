import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamTextareaComponent } from './adam-textarea.component';

describe('AdamTextareaComponent', () => {
  let component: AdamTextareaComponent;
  let fixture: ComponentFixture<AdamTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
