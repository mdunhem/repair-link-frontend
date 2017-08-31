import { Component, OnInit, Input } from '@angular/core';

import { NavItems } from '../nav-items';
import { AuthService } from '../../secure/auth/auth.service';

@Component({
  selector: 'repair-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() navItems: NavItems = {
     items: [
        { name: 'Dashboard', route: 'dashboard' }
      ]
   }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public canActivate(roles: string[] = []): boolean {
    return this.authService.hasRoles(roles);
  }

}
