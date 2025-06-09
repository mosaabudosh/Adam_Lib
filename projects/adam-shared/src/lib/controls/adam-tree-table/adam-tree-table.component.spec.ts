import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamTreeTableComponent } from './adam-tree-table.component';

describe('AdamTreeTableComponent', () => {
  let component: AdamTreeTableComponent;
  let fixture: ComponentFixture<AdamTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamTreeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
