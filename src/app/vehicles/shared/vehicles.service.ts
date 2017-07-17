import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import 'rxjs/observable/of';

import { environment } from "../../../environments/environment";
import { Vehicle  } from "./vehicle";

let VEHICLE_UUID = 0;

let VEHCILES: Array<Vehicle> = [
  new Vehicle({_id: "1", vin: `${VEHICLE_UUID++}`, year: 2003, make: 'Toyota', vehicleModel: 'Corolla' }),
  new Vehicle({_id: "2", vin: `${VEHICLE_UUID++}`, year: 2005, make: 'Acura', vehicleModel: 'TL' }),
  new Vehicle({_id: "3", vin: `${VEHICLE_UUID++}`, year: 2017, make: 'Honda', vehicleModel: 'Civic' })
];

interface VehiclesMultipleAPIResponse {

}

@Injectable()
export class VehiclesService {

  private apiUrl = environment.apiUrl;

  private _selectedVehicle = new Subject<Vehicle>();

  public get selectedVehicle() {
    return this._selectedVehicle.asObservable();
  }

  constructor(private http: HttpClient) { }

  public getVehicles(): Observable<Array<Vehicle>> {
    return this.http.get<any[]>(`${this.apiUrl}/vehicles`)
      .map<any[], Vehicle[]>((values, index) => {
        let vehicles = new Array<Vehicle>();
        values.forEach(value => {
          vehicles.push(new Vehicle(value));
        });
        return vehicles;
      });
  }

  public getVehicle(vin: String): Observable<Vehicle> {
    return this.http.get<any>(`${this.apiUrl}/vehicles/${vin}`)
      .map<any, Vehicle>((value, index) => {
        return new Vehicle(value);
      });
    // let vehicle;
    // VEHCILES.forEach(v => {
    //   if (v.vin === vin) {
    //     vehicle = v;
    //   }
    // });
    // return Observable.of(vehicle);
  }

  public selectVehicle(vehicle: Vehicle) {
    this._selectedVehicle.next(vehicle);
  }

}
