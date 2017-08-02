import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../shared/titlebar/titlebar.component';

@Component({
  selector: 'repair-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private homeBreadcrumb = { title: 'All Users', link: null };

  breadcrumbs: Breadcrumb[] = [
    this.homeBreadcrumb
  ];

  constructor() { }

  ngOnInit() {
  }

}
