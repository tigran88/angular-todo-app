import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

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
    AuthRoutingModule
  ]
})
export class AuthModule {}
