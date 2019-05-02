import { TestBed } from '@angular/core/testing';

import { InfectionService } from './infection.service';

describe('VaccineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfectionService = TestBed.get(InfectionService);
    expect(service).toBeTruthy();
  });
});
