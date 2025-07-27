import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamMenuComponent } from './adam-menu.component';

describe('AdamMenuComponent', () => {
  let component: AdamMenuComponent;
  let fixture: ComponentFixture<AdamMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
