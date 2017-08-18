import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesComponent } from './vehicles.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehiclesEditComponent } from './vehicles-edit/vehicles-edit.component';
import { SecureAuthGuard } from '../auth/secure-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    canActivateChild: [ SecureAuthGuard ],
    children: [
      {
        path: '',
        component: VehiclesListComponent
      },
      {
        path: 'create',
        component: VehiclesEditComponent
      },
      {
        path: ':id',
        component: VehicleDetailComponent
      },
      {
        path: ':id/edit',
        component: VehiclesEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
