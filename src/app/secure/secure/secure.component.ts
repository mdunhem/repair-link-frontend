import { Component } from '@angular/core';

@Component({
  selector: 'repair-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent {
  title = 'repair works!';

  navItems = {
    items: [
      { name: 'Dashboard', route: '/secure/dashboard' },
      { name: 'Vehicles', route: '/secure/vehicles' },
      { name: 'Users', route: '/secure/users', roles: ['ROLE_ADMIN'] },
      { name: 'Logout', route: '/secure/logout' }
    ]
  }

}
