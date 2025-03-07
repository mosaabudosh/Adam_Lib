import { TestBed } from '@angular/core/testing';

import { AdamLibTestService } from './adam-lib-test.service';

describe('AdamLibTestService', () => {
  let service: AdamLibTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdamLibTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
