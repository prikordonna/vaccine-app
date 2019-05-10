import { TestBed } from '@angular/core/testing';

import { ToastrsService } from './toastrs.service';

describe('ToastrsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastrsService = TestBed.get(ToastrsService);
    expect(service).toBeTruthy();
  });
});
