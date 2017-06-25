import { Component, OnInit, Input } from '@angular/core';

import { NavItems } from "../";

@Component({
  selector: 'repair-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    'class': 'navbar fixed-top navbar-toggleable-md navbar-light bg-faded has-shadow'
  }
})
export class NavbarComponent implements OnInit {

  @Input() title: string = 'RepairLink';
  @Input() navItems: NavItems;

  constructor() { }

  ngOnInit() {
  }

}
