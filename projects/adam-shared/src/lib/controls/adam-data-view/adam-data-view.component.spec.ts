import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamDataViewComponent } from './adam-data-view.component';

describe('AdamDataViewComponent', () => {
  let component: AdamDataViewComponent;
  let fixture: ComponentFixture<AdamDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamDataViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
