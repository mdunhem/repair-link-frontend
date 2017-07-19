import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Subject } from "rxjs";
import 'rxjs/observable/of';

import { VehicleDetailComponent } from './vehicle-detail.component';
import { VehiclesService } from "../shared/vehicles.service";
import { Vehicle } from "../shared/vehicle";

// Need to seperate this to a testing file or something...
export class VehiclesTestService {

  private _selectedVehicle = new Subject<Vehicle>();

  public get selectedVehicle() {
    return this._selectedVehicle.asObservable();
  }

  public getVehicle(vin: number): Observable<Vehicle> {
    return Observable.of(new Vehicle({id: 1, vin: "0", year: 2003, make: "Toyota", model: "Corolla" }));
  }

  public selectVehicle(vehicle: Vehicle) {
    this._selectedVehicle.next(vehicle);
  }

}

describe('VehicleDetailComponent', () => {
  let component: VehicleDetailComponent;
  let fixture: ComponentFixture<VehicleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ VehicleDetailComponent ],
      providers: [ { provide: VehiclesService, useClass: VehiclesTestService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
