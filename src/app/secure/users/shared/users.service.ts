import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';
import { User } from './user';

@Injectable()
export class UsersService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Array<any>> {
    return this.http.get<any[]>(`${this.apiUrl}/users/admin/listusers`);
    // return this.http.get<any[]>(`${this.apiUrl}/users`)
    //   .map<any[], User[]>(values => {
    //     const users = [];
    //     values.forEach(value => {
    //       console.log(value);
    //       users.push(new User(value));
    //     });
    //     return users;
    //   });
  }

}
