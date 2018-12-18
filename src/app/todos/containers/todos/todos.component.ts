import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  todos: any = [];
  leftItem: number;

  constructor(private todosService: TodoService) { }

  ngOnInit() {
    this.todosService.getTodos();
    this.todosService.todosChanged.subscribe((todos) => {
      this.todos = todos;
    });
    this.todosService.leftItem.subscribe(leftItem => {
      this.leftItem = leftItem;
    });
  }

  addNewTodo(title) {
    this.todosService.addTodo(title);
  }

  editTodo(todo) {
    this.todosService.updateTodo(todo.id, todo.title);
  }

  toggleTodoCheckbox(todo) {
    this.todosService.toggleTodoCompleted(todo.id, todo.completed);
  }

  deleteTodo(id) {
    this.todosService.deleteTodo(id);
  }

  filterTodos(type) {
    this.todosService.filterTodos(type);
  }

}
