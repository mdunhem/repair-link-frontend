import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'repair-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: { username: String; password: String } = { username: '', password: '' };
  loading = false;
  error = '';
  private returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // reset login status
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.route.data.subscribe(value => {
      if (value.logout) {
        this.logout();
      }
    });
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}