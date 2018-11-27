import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

const router: Routes  = [
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(router)
  ]
})
export class AppRoutingModule {}
