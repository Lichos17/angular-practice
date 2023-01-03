import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUpBody } from '../../interface/user.interface';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: Partial<UserSignUpBody> = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  doRegister() {
    console.log(this.form.email, this.form.password);

    this.authService.doRegister(this.form).subscribe((resp) => {
      if (resp.status === 'success') {
        localStorage.setItem('token', resp.token);
        this.router.navigateByUrl('/products/dashboard');
      } else {
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
}
