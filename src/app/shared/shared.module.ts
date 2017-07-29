import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SingleColumnLayoutComponent } from './single-column-layout/single-column-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    MainLayoutComponent,
    SingleColumnLayoutComponent,
    TitlebarComponent
  ],
  declarations: [
    NavbarComponent,
    SidenavComponent,
    MainLayoutComponent,
    TitlebarComponent,
    SingleColumnLayoutComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
