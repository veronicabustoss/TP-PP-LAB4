import { TestBed } from '@angular/core/testing';

import { DeslogeoGuard } from './deslogeo.guard';

describe('DeslogeoGuard', () => {
  let guard: DeslogeoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeslogeoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
