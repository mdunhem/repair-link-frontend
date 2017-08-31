import { Injectable } from '@angular/core';

/**
 * Mock the AuthService for testing purposes
 */
@Injectable()
export class MockAuthService {
  public get isLoggedIn(): boolean {
    return true;
  }
  public get authHeader(): string {
    return 'Bearer 123';
  }
  public hasRoles(rolesToCheck: string[]): boolean {
    return true;
  }
}
