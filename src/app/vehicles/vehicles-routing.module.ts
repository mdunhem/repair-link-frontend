import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesComponent } from "./vehicles.component";
import { VehiclesListComponent } from "./vehicles-list/vehicles-list.component";
import { VehicleDetailComponent } from "./vehicle-detail/vehicle-detail.component";

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    children: [
      {
        path: '',
        component: VehiclesListComponent
      },
      {
        path: ':id',
        component: VehicleDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
