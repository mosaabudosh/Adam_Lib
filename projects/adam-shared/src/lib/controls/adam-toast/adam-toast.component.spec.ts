import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamToastComponent } from './adam-toast.component';
import { AdamToastModule } from './adam-toast.module';

describe('AdamToastComponent', () => {
  let component: AdamToastComponent;
  let fixture: ComponentFixture<AdamToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamToastComponent],
      imports: [AdamToastModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdamToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
