import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamDropdownComponent } from './adam-dropdown.component';
import { AdamDropdownModule } from './adam-dropdown.module';

describe('AdamDropdownComponent', () => {
  let component: AdamDropdownComponent;
  let fixture: ComponentFixture<AdamDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamDropdownComponent],
      imports: [AdamDropdownModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdamDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
