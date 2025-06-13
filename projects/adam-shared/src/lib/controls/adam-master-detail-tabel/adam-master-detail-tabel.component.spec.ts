import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamMasterDetailTabelComponent } from './adam-master-detail-tabel.component';

describe('AdamMasterDetailTabelComponent', () => {
  let component: AdamMasterDetailTabelComponent;
  let fixture: ComponentFixture<AdamMasterDetailTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamMasterDetailTabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamMasterDetailTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
