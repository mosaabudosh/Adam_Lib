import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamContextMenuComponent } from './adam-context-menu.component';

describe('AdamContextMenuComponent', () => {
  let component: AdamContextMenuComponent;
  let fixture: ComponentFixture<AdamContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamContextMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
