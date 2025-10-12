import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamOverlayPanelComponent } from './adam-overlay-panel.component';

describe('AdamOverlayPanelComponent', () => {
  let component: AdamOverlayPanelComponent;
  let fixture: ComponentFixture<AdamOverlayPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamOverlayPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamOverlayPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
