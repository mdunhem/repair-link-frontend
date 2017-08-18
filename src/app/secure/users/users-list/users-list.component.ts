import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UsersService } from '../shared/users.service';
import { User } from '../shared/user';

@Component({
  selector: 'repair-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users: Observable<Array<User>>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

}
