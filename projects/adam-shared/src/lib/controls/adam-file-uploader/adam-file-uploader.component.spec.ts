import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdamFileUploaderComponent } from './adam-file-uploader.component';
import { AdamFileUploaderModule } from './adam-file-uploader.module';

describe('AdamFileUploaderComponent', () => {
  let component: AdamFileUploaderComponent;
  let fixture: ComponentFixture<AdamFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdamFileUploaderComponent],
      imports: [AdamFileUploaderModule],
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
