import { Component } from '@angular/core';

@Component({
  selector: 'repair-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repair works!';
  navItems = {
    items: [
      { name: 'Dashboard', route: '/dashboard' },
      { name: 'Vehicles', route: '/vehicles' },
      { name: 'Users', route: '/users' }
    ]
  }
}
