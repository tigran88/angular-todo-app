import { NgModule } from '@angular/core';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './containers/todos/todos.component';
import { SharedModule } from '../shared/shared.module';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FiltersComponent } from './components/filters/filters.component';

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
    SharedModule
  ]
})
export class TodosModule {}
