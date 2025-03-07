import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamSearchBoxComponent } from './adam-search-box.component';

describe('AdamSearchBoxComponent', () => {
  let component: AdamSearchBoxComponent;
  let fixture: ComponentFixture<AdamSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamSearchBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
