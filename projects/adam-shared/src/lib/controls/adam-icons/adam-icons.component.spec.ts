import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamIconsComponent } from './adam-icons.component';
import { AdamIconsModule } from './adam-icons.module';

describe('AdamIconsComponent', () => {
  let component: AdamIconsComponent;
  let fixture: ComponentFixture<AdamIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamIconsComponent],
      imports: [AdamIconsModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdamIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
