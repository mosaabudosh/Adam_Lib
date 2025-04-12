import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamFileUploaderComponent } from './adam-file-uploader.component';

describe('AdamFileUploaderComponent', () => {
  let component: AdamFileUploaderComponent;
  let fixture: ComponentFixture<AdamFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamFileUploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdamFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
