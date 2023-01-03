import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: { email: string; password: string } = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  doLogin() {
    console.log(this.form.email, this.form.password);

    this.authService.doLogin(this.form).subscribe((resp) => {
      if (resp.status === 'success') {
        localStorage.setItem('token', resp.token);
        this.router.navigateByUrl('/products/dashboard');
      } else {
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
}
