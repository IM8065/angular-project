import { TestBed } from '@angular/core/testing';

import { ClaimDataService } from './claim-data.service';

describe('ClaimDataService', () => {
  let service: ClaimDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
