import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class SecureAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService) {}

  /**
   * Verifies if user can activate the provided route.
   *
   * It first checks if the user is logged in and then verifies that the user has
   * the needed roles assigned.
   *
   * @public
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @return {boolean}
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    let roles: string[] = [];
    if (route.data && route.data.roles) {
      roles = route.data.roles;
    }
    return this.checkIfLoggedIn(url, roles);
  }

  /**
   * Verifies if user can activate the requested child routes.
   *
   * @public
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @return {boolean}
   */
  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  /**
   * Verifies if user can load the needed module.
   *
   * @public
   * @param {Route} route
   * @return {boolean}
   */
  public canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkIfLoggedIn(url);
  }

  /**
   * Checks if there is currently a logged in user and then checks if the current user has
   * the needed roles assigned.
   *
   * If the user is not logged in then the requested url is stored in local cache and then
   * delegates to the AuthService to log the user in. After logging in, the requested url
   * will be used to redirect the user to that page, although it will still pass through
   * the guard again and validate that the user can load the requested page.
   *
   * @private
   * @param {string} url
   * @param {string[]} roles
   * @return {boolean}
   */
  private checkIfLoggedIn(url: string, roles: string[] = []): boolean {
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
