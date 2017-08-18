import {Component, OnChanges, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Vehicle } from '../shared/vehicle';
import { VehiclesService } from '../shared/vehicles.service';

@Component({
  selector: 'repair-vehicles-edit',
  templateUrl: './vehicles-edit.component.html',
  styleUrls: ['./vehicles-edit.component.scss']
})
export class VehiclesEditComponent implements OnInit, OnChanges {

  form: FormGroup;

  private vehicle = new Vehicle({});

  constructor(
    private vehiclesService: VehiclesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.form = this.formBuilder.group({
      vin: '',
      year: '',
      make: '',
      model: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.vehiclesService.getVehicle(params['id'])
          .subscribe(vehicle => {
            this.vehicle = vehicle;
            this.form.setValue({
              vin: vehicle.vin,
              year: vehicle.year,
              make: vehicle.make,
              model: vehicle.model
            });
          });
      }
    });
  }

  ngOnChanges() {
    this.form.reset({
      vin: this.vehicle.vin,
      year: this.vehicle.year,
      make: this.vehicle.make,
      model: this.vehicle.model
    });
  }

  submit() {
    this.vehicle.vin = this.form.value.vin;
    this.vehicle.year = this.form.value.year;
    this.vehicle.make = this.form.value.make;
    this.vehicle.model = this.form.value.model;
    this.vehiclesService.save(this.vehicle).subscribe(vehicle => {
      this.vehicle = vehicle;
      this.router.navigate([vehicle.id], { relativeTo: this.route.parent });
    });
  }

}
