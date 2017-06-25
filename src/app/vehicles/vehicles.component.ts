import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

@Component({
  selector: 'repair-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  breadcrumbs = [
    {title: 'All Vehicles'},
    // {title: 'Vehicle', link: '/vehicles'}
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.route.firstChild.url.subscribe(url => {
    //       if (this.breadcrumbs.length > 1) {
    //         this.breadcrumbs.pop();
    //       }
    //       if (url.length) {
    //         this.breadcrumbs.push({ title: url.join('/') });
    //       }
    //     });
    //   }
    // });
  }

}
