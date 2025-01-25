import { TestBed } from '@angular/core/testing';

import { AdamSharedService } from './adam-shared.service';

describe('AdamSharedService', () => {
  let service: AdamSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdamSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
