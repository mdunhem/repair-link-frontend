import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

import { VehiclesService } from './shared/vehicles.service';
import { Vehicle } from './shared/vehicle';
import { Breadcrumb } from '../../shared/titlebar/titlebar.component';

@Component({
  selector: 'repair-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  private homeBreadcrumb = { title: 'All Vehicles', link: null };

  breadcrumbs: Breadcrumb[] = [
    this.homeBreadcrumb
  ];

  constructor(private route: ActivatedRoute, private router: Router, private vehicleService: VehiclesService) { }

  ngOnInit() {
//    this.vehicleService.selectedVehicle.subscribe((vehicle: Vehicle) => {
//      this.homeBreadcrumb.link = '/vehicles';
//      this.breadcrumbs.push({ title: vehicle.name });
//    });
//    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
////      if (event.url === this.route.snapshot.url.join('/'))
//      console.log(event);
//      console.log(this.route.snapshot);
//    });
  }

}
