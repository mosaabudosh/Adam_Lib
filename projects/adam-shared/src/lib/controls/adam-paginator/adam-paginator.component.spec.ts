import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamPaginatorComponent } from './adam-paginator.component';

describe('AdamPaginatorComponent', () => {
  let component: AdamPaginatorComponent;
  let fixture: ComponentFixture<AdamPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamPaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
