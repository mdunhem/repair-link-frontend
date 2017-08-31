import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class SecureAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    let roles: string[] = [];
    if (route.data && route.data.roles) {
      roles = route.data.roles;
    }
    return this.checkLogin(url, roles);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string, roles: string[] = []): boolean {
    if (this.authService.isLoggedIn) {
      return this.checkRoles(roles);
    }
    localStorage.setItem('returnUrl', url);
    this.authService.login();
    return false;
  }

  /**
   * Validates if the current user has the required roles necessary to load the requested page.
   *
   * @private
   * @param {string[]} roles - Array of roles to validate
   * @returns {boolean}
   */
  private checkRoles(roles: string[]): boolean {
    return this.authService.hasRoles(roles);
  }
}
