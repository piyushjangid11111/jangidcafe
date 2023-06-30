import { TestBed } from '@angular/core/testing';

import{CafeService} from './cafeservice.service'

describe('CafeserviceService', () => {
  let service: CafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
