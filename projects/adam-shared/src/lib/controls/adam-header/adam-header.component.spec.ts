import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { AdamHeaderComponent } from './adam-header.component';
import { AdamHeaderModule } from './adam-header.module';

describe('AdamHeaderComponent', () => {
  let component: AdamHeaderComponent;
  let fixture: ComponentFixture<AdamHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamHeaderComponent],
      imports: [AdamHeaderModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
