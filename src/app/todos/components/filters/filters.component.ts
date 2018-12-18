import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  filterTodos(type) {
    this.filter.emit(type);
  }

}
