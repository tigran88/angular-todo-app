import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo;
  @Output() delete = new EventEmitter<string>();
  @Output() toggleTodo = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  onToggleTodoCheckbox(id, completed) {
    this.toggleTodo.emit({ id, completed });
  }

  onDelete(id) {
    this.delete.emit(id);
  }

}
