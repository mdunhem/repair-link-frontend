import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure/secure.component';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth-interceptor';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SecureRoutingModule
  ],
  providers: [
    // AuthService
  ],
  declarations: [
    SecureComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class SecureModule { }
