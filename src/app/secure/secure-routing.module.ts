import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecureAuthGuard } from './auth/secure-auth.guard';
import { SecureComponent } from './secure/secure.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    canLoad: [ SecureAuthGuard ],
    canActivateChild: [ SecureAuthGuard ],
    children: [
      { path: '', loadChildren: 'app/secure/dashboard/dashboard.module#DashboardModule' },
      { path: 'vehicles', loadChildren: 'app/secure/vehicles/vehicles.module#VehiclesModule' },
      { path: 'users', loadChildren: 'app/secure/users/users.module#UsersModule' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent, data: { logout: true } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ SecureAuthGuard ]
})
export class SecureRoutingModule { }
