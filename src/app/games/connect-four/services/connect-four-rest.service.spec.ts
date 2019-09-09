import { TestBed } from '@angular/core/testing';

import { ConnectFourRestService } from './connect-four-rest.service';

describe('ConnectFourRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectFourRestService = TestBed.get(ConnectFourRestService);
    expect(service).toBeTruthy();
  });
});
