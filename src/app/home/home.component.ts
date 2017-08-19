import { Component, OnInit } from '@angular/core';

import { NavItems } from '../shared/nav-items';

@Component({
  selector: 'repair-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navItems: NavItems = {
    items: [
      { name: 'About Us', route: '/about' },
      { name: 'Log In', route: '/secure' }
    ]
  };

  title = 'RepairLink';
  subTitle = 'CS 411 Green Team';

  constructor() { }

  ngOnInit() {
  }

}
