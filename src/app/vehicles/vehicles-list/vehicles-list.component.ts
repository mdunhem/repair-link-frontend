import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { VehiclesService } from "../shared/vehicles.service";
import { Vehicle } from "../shared/vehicle";

@Component({
  selector: 'repair-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  title: string = 'All Vehicles';

  vehicles: Observable<Array<Vehicle>>;

  breadcrumbs = [
    {title: 'All Vehicles'},
    {title: 'Vehicle', link: '/vehicles'}
  ];

  constructor(private router: Router, private route: ActivatedRoute, private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.vehicles = this.vehiclesService.getVehicles();
  }

  /**
   * selectVehicle
   */
  public selectVehicle(vehicle: Vehicle) {
    this.router.navigate([vehicle.vin], { relativeTo: this.route });
  }

}
