import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { AuthService } from '../../auth/auth.service';
import { User } from './user';

@Injectable()
export class UsersService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  getUsers(): Observable<User[]> {

    // get users from api
    return this.http.get('/api/users')
        .map((response: any) => response.json());
  }

}
