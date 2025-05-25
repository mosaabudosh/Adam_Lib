import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickListComponent } from './adam-pick-list.component';

describe('AdamPickListComponent', () => {
  let component: PickListComponent;
  let fixture: ComponentFixture<PickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
