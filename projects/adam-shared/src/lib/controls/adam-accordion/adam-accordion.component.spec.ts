import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamAccordionComponent } from './adam-accordion.component';

describe('AdamAccordionComponent', () => {
  let component: AdamAccordionComponent;
  let fixture: ComponentFixture<AdamAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
