import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './containers/todos/todos.component';
import { SharedModule } from '../shared/shared.module';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    TodosComponent,
    NewTodoComponent,
    TodoItemComponent,
    FiltersComponent
  ],
  exports: [
    TodosComponent
  ],
  imports: [
    TodosRoutingModule,
    SharedModule,
    AngularFireModule,
    CommonModule
  ],
  providers: [
    TodoService,
    AngularFirestore
  ]
})
export class TodosModule {}
