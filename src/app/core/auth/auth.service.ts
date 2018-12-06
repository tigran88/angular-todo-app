import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthData } from './models/auth-data.model';

@Injectable()
export class AuthService {
  authState = null;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
    afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  register(authData: AuthData) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        this.router.navigateByUrl('/todos');
      })
      .catch(err => {
        console.log(err);
      });
  }

  login(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        this.router.navigateByUrl('/todos');
      }).catch(err => {
        console.log(err);
      });
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  isAuth() {
    return this.authState !== null;
  }

}
