import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import 'rxjs/observable/of';

import { Vehicle  } from "./vehicle";

let VEHICLE_UUID = 0;

let VEHCILES: Array<Vehicle> = [
  new Vehicle({ vin: VEHICLE_UUID++, year: 2003, make: 'Toyota', model: 'Corolla' }),
  new Vehicle({ vin: VEHICLE_UUID++, year: 2005, make: 'Acura', model: 'TL' }),
  new Vehicle({ vin: VEHICLE_UUID++, year: 2017, make: 'Honda', model: 'Civic' })
];

@Injectable()
export class VehiclesService {

  private _selectedVehicle = new Subject<Vehicle>();

  public get selectedVehicle() {
    return this._selectedVehicle.asObservable();
  }

  constructor() { }

  public getVehicles(): Observable<Array<Vehicle>> {
    return Observable.of(VEHCILES);
  }

  public getVehicle(vin: number): Observable<Vehicle> {
    let vehicle;
    VEHCILES.forEach(v => {
      if (v.vin === vin) {
        vehicle = v;
      }
    });
    return Observable.of(vehicle);
  }

  public selectVehicle(vehicle: Vehicle) {
    this._selectedVehicle.next(vehicle);
  }

}
