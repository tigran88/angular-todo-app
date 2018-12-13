import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class TodoItemComponent implements OnInit {
  @Input() todo;
  @Output() delete = new EventEmitter<string>();
  @Output() toggleTodo = new EventEmitter<object>();
  @Output() edit = new EventEmitter<object>();

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  onClick(event) {
    if (!event.target.classList.contains('todo-item__edit')) {
      this.elRef.nativeElement.parentElement.querySelectorAll('.todo-item__edit').forEach((todoName) => {
        todoName.style.display = 'none';
      });
      this.elRef.nativeElement.parentElement.querySelectorAll('.todo-item__name').forEach((todoName) => {
        todoName.style.display = 'block';
      });
    }
  }

  switchEditMode(id) {
      this.elRef.nativeElement.parentElement.querySelectorAll('.todo-item__edit')[0].style.display = 'block';
      this.elRef.nativeElement.parentElement.querySelectorAll('.todo-item__edit')[0].focus();
      this.elRef.nativeElement.parentElement.querySelectorAll('.todo-item__name')[0].style.display = 'none';
  }

  editTodo(event, id) {
    this.edit.emit({id, title: event.target.value});
  }

  onToggleTodoCheckbox(id, completed) {
    this.toggleTodo.emit({ id, completed });
  }

  onDelete(id) {
    this.delete.emit(id);
  }

}
