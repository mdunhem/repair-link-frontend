import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SingleColumnLayoutComponent } from './single-column-layout/single-column-layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    MainLayoutComponent,
    SingleColumnLayoutComponent,
    TitlebarComponent,
    FooterComponent
  ],
  declarations: [
    SidenavComponent,
    MainLayoutComponent,
    TitlebarComponent,
    SingleColumnLayoutComponent,
    FooterComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
