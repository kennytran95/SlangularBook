import { TestBed } from '@angular/core/testing';

import { SlangsService } from './slangs.service';

describe('SlangsService', () => {
  let service: SlangsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlangsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
