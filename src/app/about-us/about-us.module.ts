import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { TeamMemberService } from './shared/team-member.service';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutUsRoutingModule
  ],
  declarations: [ AboutUsComponent ],
  providers: [ TeamMemberService ]
})
export class AboutUsModule { }
