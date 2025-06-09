import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamGalleriaComponent } from './adam-galleria.component';

describe('AdamGalleriaComponent', () => {
  let component: AdamGalleriaComponent;
  let fixture: ComponentFixture<AdamGalleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamGalleriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamGalleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
