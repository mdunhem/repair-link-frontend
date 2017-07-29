import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure/secure.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SecureRoutingModule
  ],
  declarations: [SecureComponent]
})
export class SecureModule { }
