import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';

// Don't need to actually display anything, login page is handled by Okta
@Component({
  selector: 'repair-login',
  template: ''
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.returnUrl = localStorage.getItem('returnUrl') || '/';
    this.route.data.subscribe(value => {
      if (value.logout) {
        this.logout();
      } else {
        this.login();
      }
    });
  }

  login() {
    this.authService.handleAuthentication();
    this.router.navigate([this.returnUrl]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
