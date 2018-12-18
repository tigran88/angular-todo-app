import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {
  @Input() leftItem = new EventEmitter<number>();
  @Output() filter = new EventEmitter<string>();
  @Output() clearCompleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  itemLeftText() {
    let item = 'item';
    if (this.leftItem > 1) {
      item = item + 's';
    }
    const text = item + ' left';
    return text;
  }

  filterTodos(type) {
    this.filter.emit(type);
  }

  clearCompletedTodos() {
    this.clearCompleted.emit();
  }

}
