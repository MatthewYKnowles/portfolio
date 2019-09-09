import { TestBed } from '@angular/core/testing';

import { ConnectFourService } from './connect-four.service';

describe('ConnectFourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectFourService = TestBed.get(ConnectFourService);
    expect(service).toBeTruthy();
  });
});
