import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamSharedComponent } from './adam-shared.component';
import { AdamSharedModule } from './adam-shared.module';

describe('AdamSharedComponent', () => {
  let component: AdamSharedComponent;
  let fixture: ComponentFixture<AdamSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamSharedComponent],
      imports: [AdamSharedModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdamSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
