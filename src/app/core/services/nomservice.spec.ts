import { TestBed } from '@angular/core/testing';

import { Nomservice } from './nomservice';

describe('Nomservice', () => {
  let service: Nomservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nomservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
