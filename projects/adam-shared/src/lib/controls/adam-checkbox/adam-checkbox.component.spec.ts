import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamCheckboxComponent } from './adam-checkbox.component';
import { AdamCheckboxModule } from './adam-checkbox.module';

describe('AdamCheckboxComponent', () => {
  let component: AdamCheckboxComponent;
  let fixture: ComponentFixture<AdamCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamCheckboxComponent],
      imports: [AdamCheckboxModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdamCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
