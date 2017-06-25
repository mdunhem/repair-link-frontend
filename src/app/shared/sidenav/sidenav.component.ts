import { Component, OnInit, Input } from '@angular/core';

import { NavItems } from "../";

@Component({
  selector: 'repair-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() navItems: NavItems = {
     items: [
        { name: 'Dashboard', route: 'dashboard' }
      ]
   }

  constructor() { }

  ngOnInit() {
  }

}
