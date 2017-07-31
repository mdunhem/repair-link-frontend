import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  public token: String;

  public get isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  public get authHeader() {
    return 'Bearer ' + this.token;
  }

  redirectUrl: String;

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: String, password: String) {
    return Observable.of(this._mockTestUsernameAndPassword(username, password))
      .delay(1000)
      .map<Boolean, Boolean>(value => {
        if (value) {
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: '12345' }));
          return true;
        }
        return false;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  private _mockTestUsernameAndPassword(username: String, password: String) {
    if (username === 'test' && password === 'test') {
      return true;
    }
    return false;
  }
}