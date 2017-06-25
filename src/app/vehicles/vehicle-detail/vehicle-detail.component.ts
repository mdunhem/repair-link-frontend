import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

import { VehiclesService } from "../shared/vehicles.service";
import { Vehicle } from "../shared/vehicle";

@Component({
  selector: 'repair-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  @Input() vin: number;

  vehicle: Vehicle;

  breadcrumbs = [
    {title: 'All Vehicles'},
    {title: 'Vehicle', link: '/vehicles'}
  ];

  constructor(private route: ActivatedRoute, private router: Router,private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.vehiclesService.getVehicle(+params['vin']))
      .subscribe((vehicle: Vehicle) => {
        this.vehicle = vehicle;
        this.breadcrumbs.push({title: this.vehicle.model});
      });
  }

}
