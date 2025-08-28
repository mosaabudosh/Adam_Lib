import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamBreadcrumbComponent } from './adam-breadcrumb.component';

describe('AdamBreadcrumbComponent', () => {
  let component: AdamBreadcrumbComponent;
  let fixture: ComponentFixture<AdamBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamBreadcrumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
