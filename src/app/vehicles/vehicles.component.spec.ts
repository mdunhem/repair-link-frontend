import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from "../shared/shared.module";
import { VehiclesComponent } from './vehicles.component';
import { VehiclesService } from "./shared/vehicles.service";
import { Vehicle } from "./shared/vehicle";

// Need to seperate this to a testing file or something...
export class VehiclesTestService {

}

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [ VehiclesComponent ],
      providers: [
        { provide: VehiclesService, useClass: VehiclesTestService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
