import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.sass']
})
export class NewTodoComponent implements OnInit {

  @Output() addtodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddTood(event) {
    const todoValue = event.target.value;
    if (todoValue.trim() !== '') {
      this.addtodo.emit(todoValue);
      event.target.value = '';
    }
  }

}


