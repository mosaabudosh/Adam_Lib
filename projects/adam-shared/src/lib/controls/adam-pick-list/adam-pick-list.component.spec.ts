import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamPickListComponent } from './adam-pick-list.component';

describe('AdamPickListComponent', () => {
  let component: AdamPickListComponent;
  let fixture: ComponentFixture<AdamPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamPickListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
