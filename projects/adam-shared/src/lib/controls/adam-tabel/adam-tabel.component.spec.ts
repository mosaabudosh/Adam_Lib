import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamTabelComponent } from './adam-tabel.component';
import { AdamTabelModule } from './adam-tabel.module';

describe('AdamTabelComponent', () => {
  let component: AdamTabelComponent;
  let fixture: ComponentFixture<AdamTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamTabelComponent],
      imports: [AdamTabelModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdamTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
