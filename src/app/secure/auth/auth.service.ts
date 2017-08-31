import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import * as OktaAuth from '@okta/okta-auth-js/dist/okta-auth-js.min.js';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  private oktaAuth = new OktaAuth({
    url: environment.okta.url,
    clientId: environment.okta.clientId,
    issuer: environment.okta.issuer,
    redirectUri: environment.okta.redirectUri,
  });

  /**
   * Checks if there is a logged in user. It first checks if there is a current token
   * and then makes sure that it has not expired. If both checks are good, then the
   * user is considered as logged in.
   *
   * @returns {boolean}
   */
  public get isLoggedIn() {
    if (!!this.oktaAuth.tokenManager.get('accessToken')) {
      return new Date(this.oktaAuth.tokenManager.get('accessToken').expiresAt * 1000) > new Date();
    }
    return false;
  }

  public get authHeader() {
    return 'Bearer ' + this.oktaAuth.tokenManager.get('accessToken');
  }

  login() {
    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'email', 'profile']
    });
  }

  /**
   * Utility method used to check if the current user has all of the roles in the
   * supplied list of roles. The current user must have all of the supplied roles
   * for this to return true.
   *
   * @param {string[]} rolesToCheck - Array of roles to validate
   * @returns {boolean}
   */
  public hasRoles(rolesToCheck: string[]): boolean {
    const token = this.oktaAuth.tokenManager.get('accessToken').accessToken;
    const roles: string[] = this.oktaAuth.token.decode(token).payload.roles;
    return rolesToCheck.every(role => roles.includes(role));
  }

  async handleAuthentication() {
    const tokens = await this.oktaAuth.token.parseFromUrl();
    tokens.forEach(token => {
      if (token.idToken) {
        this.oktaAuth.tokenManager.add('idToken', token);
      }
      if (token.accessToken) {
        this.oktaAuth.tokenManager.add('accessToken', token);
      }
    });
  }

  async logout() {
    this.oktaAuth.tokenManager.clear();
    await this.oktaAuth.signOut();
  }

}
