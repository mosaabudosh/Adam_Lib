import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamTabsComponent } from './adam-tabs.component';

describe('AdamTabsComponent', () => {
  let component: AdamTabsComponent;
  let fixture: ComponentFixture<AdamTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
