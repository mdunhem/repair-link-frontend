import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';
import { Vehicle  } from './vehicle';

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
        const vehicles = new Array<Vehicle>();
        values.forEach(value => {
          vehicles.push(new Vehicle(value));
        });
        return vehicles;
      });
  }

  public getVehicle(id: Number): Observable<Vehicle> {
    return this.http.get<any>(`${this.apiUrl}/vehicles/${id}`)
      .map<any, Vehicle>((value, index) => {
        return new Vehicle(value);
      });
  }

  public selectVehicle(vehicle: Vehicle) {
    this._selectedVehicle.next(vehicle);
  }

}
