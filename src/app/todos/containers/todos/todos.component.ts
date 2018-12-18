import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  todos: any = [];
  leftItem = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos();
    this.todoService.todosChanged.subscribe((todos) => {
      this.todos = todos;
    });
    this.todoService.leftItem.subscribe(leftItem => {
      this.leftItem = leftItem;
    });
  }

  addNewTodo(title) {
    this.todoService.addTodo(title);
  }

  editTodo(todo) {
    this.todoService.updateTodo(todo.id, todo.title);
  }

  toggleTodoCheckbox(todo) {
    this.todoService.toggleTodoCompleted(todo.id, todo.completed);
  }

  deleteTodo(id) {
    this.todoService.deleteTodo(id);
  }

  filterTodos(type) {
    this.todoService.filterTodos(type);
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

}
