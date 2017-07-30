import { Component, OnInit, Input } from '@angular/core';

export interface NavItems {
  items: { name: string, route: string }[];
}

@Component({
  selector: 'repair-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    'class': 'navbar fixed-top navbar-toggleable-md navbar-light bg-faded has-shadow'
  }
})
export class NavbarComponent implements OnInit {

  @Input() title = 'RepairLink';
  @Input() navItems: NavItems;

  constructor() { }

  ngOnInit() {
  }

}
