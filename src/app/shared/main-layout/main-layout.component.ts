import { Component, OnInit, Input } from '@angular/core';

import { NavItems } from '../';

@Component({
  selector: 'repair-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @Input() title: string = '';

  @Input() navItems: NavItems = {
    items: []
  };

  constructor() { }

  ngOnInit() {
  }

}
