import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SecureAuthGuard } from './secure-auth.guard';
import { AuthService } from './auth.service';

describe('SecureAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [ AuthService, SecureAuthGuard ]
    });
  });

  it('should ...', inject([SecureAuthGuard], (guard: SecureAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
