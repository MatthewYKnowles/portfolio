import { TestBed } from '@angular/core/testing';

import { ConnectFourRestService } from './connect-four-rest.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConnectFourRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ConnectFourRestService = TestBed.get(ConnectFourRestService);
    expect(service).toBeTruthy();
  });
});
