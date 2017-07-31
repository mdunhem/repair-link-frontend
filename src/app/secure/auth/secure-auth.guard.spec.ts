import { TestBed, async, inject } from '@angular/core/testing';

import { SecureAuthGuard } from './secure-auth.guard';

describe('SecureAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureAuthGuard]
    });
  });

  it('should ...', inject([SecureAuthGuard], (guard: SecureAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
