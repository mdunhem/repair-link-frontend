import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { NavItems } from './shared/nav-items';


@Component({
  selector: 'repair-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navItems: NavItems = {
    items: [
      { name: 'About Us', route: '/about' },
      { name: 'Log In', route: '/secure' }
    ]
  };

  isSecureLayout = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.route)
      .map(route => {
        return route.firstChild.snapshot.url[0];
      })
      .subscribe(event => {
        this.isSecureLayout = event && event.path === 'secure';
      });
  }
}
