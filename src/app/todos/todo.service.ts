import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class TodoService {
  todos = [];
  todosChanged = new Subject();

  constructor(private db: AngularFirestore) { }

  getTodos() {
    this.db.collection('todos')
      .snapshotChanges()
      .pipe(map(res => {
        return res.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      }))
      .subscribe((todos => {
        this.todos = todos;
        this.todosChanged.next([...this.todos]);
    }));
  }

  addTodo(title) {
    const todo = {
      title: title,
      completed: false
    };
    this.db.collection('todos').add(todo);
  }

}
