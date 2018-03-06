import { TestBed, inject } from '@angular/core/testing';

import { OpersService } from './opers.service';

describe('OpersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpersService]
    });
  });

  it('should be created', inject([OpersService], (service: OpersService) => {
    expect(service).toBeTruthy();
  }));
});
