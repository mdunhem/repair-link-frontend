import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import * as OktaAuth from '@okta/okta-auth-js/dist/okta-auth-js.min.js';

@Injectable()
export class AuthService {

  private oktaAuth = new OktaAuth({
    url: 'https://dev-763801.oktapreview.com/',
    clientId: '0oabg1qdk8K1paWkI0h7',
    issuer: 'https://dev-763801.oktapreview.com/oauth2/ausbg8o1txTrmRWmb0h7',
    redirectUri: 'http://localhost:4200/secure/login',
  });

  public get isLoggedIn() {
    // Checks if there is a current accessToken in the TokenManger.
    return !!this.oktaAuth.tokenManager.get('accessToken');
  }

  public get authHeader() {
    return 'Bearer ' + this.oktaAuth.tokenManager.get('accessToken');
  }

  redirectUrl: String;

  login() {
    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'email', 'profile']
    });
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
