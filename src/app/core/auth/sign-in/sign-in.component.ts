import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const authData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.login(authData);
    }
  }

}
