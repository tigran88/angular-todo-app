import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  exports: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule,
    AngularFireAuthModule
  ]
})
export class AuthModule {}
