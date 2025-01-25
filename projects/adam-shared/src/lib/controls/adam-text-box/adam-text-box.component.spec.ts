import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamTextBoxComponent } from './adam-text-box.component';
import { AdamTextBoxModule } from './adam-text-box.module';

describe('AdamTextBoxComponent', () => {
  let component: AdamTextBoxComponent;
  let fixture: ComponentFixture<AdamTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamTextBoxComponent],
      imports: [AdamTextBoxModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdamTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
