import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamTextBoxDDLComponent } from './adam-text-box-ddl.component';

describe('AdamTextBoxDDLComponent', () => {
  let component: AdamTextBoxDDLComponent;
  let fixture: ComponentFixture<AdamTextBoxDDLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamTextBoxDDLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamTextBoxDDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
