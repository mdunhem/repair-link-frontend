import { Injectable } from '@angular/core';
import * as OktaAuth from '@okta/okta-auth-js/dist/okta-auth-js.min.js';

import { environment } from '../../../environments/environment';

/**
 * This service handles all authentication and authorization. It validates
 * the current user and redirects to the login prompt if the user is not
 * currently logged in or the login token has expired.
 *
 * As this is a frontend app, it uses OpenID Connect JWT tokens to authenticate
 * and authorize users. The current implementation uses Okta as the identity
 * management server but can easily be switched out to use a different provider.
 */
@Injectable()
export class AuthService {

  /**
   * Okta utility module to handle parsing, storing, and managing user authentication
   * from Okta and OpenID connect token.
   *
   * @private
   * @type {OktaAuth}
   */
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
   * @property isLoggedIn
   * @public
   * @returns {boolean}
   */
  public get isLoggedIn(): boolean {
    if (!!this.oktaAuth.tokenManager.get('accessToken')) {
      return new Date(this.oktaAuth.tokenManager.get('accessToken').expiresAt * 1000) > new Date();
    }
    return false;
  }

  /**
   * @property authHeader - The string to be used in the Authorization header for each http request.
   * @public
   * @returns {string}
   */
  public get authHeader(): string {
    return 'Bearer ' + this.oktaAuth.tokenManager.get('accessToken');
  }

  /**
   * Utility method used to check if the current user has all of the roles in the
   * supplied list of roles. The current user must have all of the supplied roles
   * for this to return true.
   *
   * @public
   * @param {string[]} rolesToCheck - Array of roles to validate
   * @returns {boolean}
   */
  public hasRoles(rolesToCheck: string[]): boolean {
    const token = this.oktaAuth.tokenManager.get('accessToken').accessToken;
    const roles: string[] = this.oktaAuth.token.decode(token).payload.roles;
    return rolesToCheck.every(role => roles.includes(role));
  }

  /**
   * Callback used to handle parsing the url when redirected back from the login screen.
   *
   * @public
   * @return {Promise<void>}
   */
  public async handleAuthentication(): Promise<void> {
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

  /**
   * Launch the login screen.
   *
   * @public
   * @returns {void}
   */
  public login(): void {
    this.oktaAuth.token.getWithRedirect({
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'email', 'profile']
    });
  }

  /**
   * Logs out the current user and clears the stored token.
   *
   * @public
   * @return {Promise<void>}
   */
  public async logout(): Promise<void> {
    this.oktaAuth.tokenManager.clear();
    await this.oktaAuth.signOut();
  }

}
