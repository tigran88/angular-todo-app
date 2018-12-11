import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  todos: any = [];

  constructor(private todosService: TodoService) { }

  ngOnInit() {
    this.todosService.getTodos();
    this.todosService.todosChanged.subscribe((todos) => {
      this.todos = todos;
    });
  }

  addNewTodo(title) {
    this.todosService.addTodo(title);
  }

}
