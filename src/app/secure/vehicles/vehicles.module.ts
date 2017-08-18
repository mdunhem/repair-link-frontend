import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesService } from './shared/vehicles.service';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesEditComponent } from './vehicles-edit/vehicles-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VehiclesRoutingModule
  ],
  declarations: [VehiclesListComponent, VehicleDetailComponent, VehiclesComponent, VehiclesEditComponent],
  providers: [ VehiclesService ]
})
export class VehiclesModule { }
