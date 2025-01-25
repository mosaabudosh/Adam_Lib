import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamToastComponent } from './adam-toast.component';

describe('AdamToastComponent', () => {
  let component: AdamToastComponent;
  let fixture: ComponentFixture<AdamToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamToastComponent]
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
