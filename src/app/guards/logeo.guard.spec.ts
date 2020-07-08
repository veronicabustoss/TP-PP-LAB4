import { TestBed } from '@angular/core/testing';

import { LogeoGuard } from './logeo.guard';

describe('LogeoGuard', () => {
  let guard: LogeoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogeoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
