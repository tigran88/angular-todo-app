import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    }, {
      validator: this.matchPassword
    }
  );

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
  }

  matchPassword(AC: AbstractControl) {
    const password = AC.get('password').value;
    const confirmPassword = AC.get('confirmPassword').value;
    if (password === confirmPassword) {
      return null;
    } else {
      AC.get('confirmPassword').setErrors({MatchPassword: true});
    }
  }

}
