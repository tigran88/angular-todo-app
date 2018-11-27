import { NgModule } from '@angular/core';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TodosComponent
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
