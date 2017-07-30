import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SingleColumnLayoutComponent } from './single-column-layout/single-column-layout.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LayoutRowComponent } from './layout-row/layout-row.component';
import { LayoutSectionComponent } from './layout-section/layout-section.component';

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
    TitlebarComponent,
    FooterComponent,
    JumbotronComponent,
    LayoutRowComponent,
    LayoutSectionComponent
  ],
  declarations: [
    NavbarComponent,
    SidenavComponent,
    MainLayoutComponent,
    TitlebarComponent,
    SingleColumnLayoutComponent,
    FooterComponent,
    JumbotronComponent,
    LayoutRowComponent,
    LayoutSectionComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
