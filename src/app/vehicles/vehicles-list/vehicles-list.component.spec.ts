import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Subject } from "rxjs";
import 'rxjs/observable/of';

import { VehiclesListComponent } from './vehicles-list.component';
import { VehiclesService } from "../shared/vehicles.service";
import { Vehicle } from "../shared/vehicle";

// Need to seperate this to a testing file or something...
export class VehiclesTestService {

  public getVehicles(): Observable<Array<Vehicle>> {
    return Observable.of([new Vehicle({ vin: 0, year: 2003, make: 'Toyota', model: 'Corolla' })]);
  }

}

describe('VehiclesListComponent', () => {
  let component: VehiclesListComponent;
  let fixture: ComponentFixture<VehiclesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ VehiclesListComponent ],
      providers: [ { provide: VehiclesService, useClass: VehiclesTestService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
