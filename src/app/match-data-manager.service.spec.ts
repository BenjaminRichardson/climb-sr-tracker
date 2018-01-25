import { TestBed, inject } from '@angular/core/testing';

import { MatchDataManagerService } from './match-data-manager.service';

describe('MatchDataManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchDataManagerService]
    });
  });

  it('should be created', inject([MatchDataManagerService], (service: MatchDataManagerService) => {
    expect(service).toBeTruthy();
  }));
});
