import { NgModule } from '@angular/core';

import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    TodosComponent
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule {}
