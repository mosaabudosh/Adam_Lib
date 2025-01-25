import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamLabelComponent } from './adam-label.component';
import { AdamLabelModule } from './adam-label.module';

describe('AdamLabelComponent', () => {
  let component: AdamLabelComponent;
  let fixture: ComponentFixture<AdamLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamLabelComponent],
      imports: [AdamLabelModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdamLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
