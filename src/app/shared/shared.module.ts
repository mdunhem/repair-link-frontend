import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SingleColumnLayoutComponent } from './single-column-layout/single-column-layout.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

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
    FooterComponent,
    JumbotronComponent
  ],
  declarations: [
    SidenavComponent,
    MainLayoutComponent,
    TitlebarComponent,
    SingleColumnLayoutComponent,
    FooterComponent,
    JumbotronComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
