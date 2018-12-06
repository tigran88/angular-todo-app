import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class TodosRoutingModule {}
