import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecureComponent } from './secure/secure.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      { path: '', loadChildren: 'app/secure/dashboard/dashboard.module#DashboardModule' },
      { path: 'vehicles', loadChildren: 'app/secure/vehicles/vehicles.module#VehiclesModule' },
      { path: 'users', loadChildren: 'app/secure/users/users.module#UsersModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
