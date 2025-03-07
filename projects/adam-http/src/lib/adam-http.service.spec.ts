import { TestBed } from '@angular/core/testing';

import { AdamHttpService } from './adam-http.service';

describe('AdamHttpService', () => {
  let service: AdamHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdamHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
