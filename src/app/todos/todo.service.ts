import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class TodoService {
  todos = [];
  todosChanged = new Subject();
  leftItem = new Subject();

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
    this.db.collection('todos', ref => ref.where('completed', '==', false))
      .snapshotChanges()
      .subscribe((todos) => {
        this.leftItem.next(todos.length);
      });
  }

  addTodo(title) {
    const todo = {
      title: title,
      completed: false
    };
    this.db.collection('todos').add(todo);
  }

  updateTodo(id, title) {
    this.db.collection('todos').doc(id)
      .update({title})
      .then(() => console.log('Todo successfully updated!'))
      .catch(error => console.log(error));
  }

  toggleTodoCompleted(id, completed) {
    this.db.collection('todos').doc(id)
      .update({completed: !completed})
      .then(() => console.log('Todo successfully updated!'))
      .catch(error => console.log(error));
  }

  deleteTodo(id) {
    this.db.collection('todos').doc(id)
      .delete()
      .then(() => console.log('Todo successfully deleted!'))
      .catch(error => console.log(error));
  }

  filterTodos(type) {
    let todosCollection;
    switch (type) {
      case 'completed':
        todosCollection = this.db.collection('todos', ref => ref.where('completed', '==', true));
      break;
      case 'active':
        todosCollection = this.db.collection('todos', ref => ref.where('completed', '==', false));
      break;
      default:
        todosCollection = this.db.collection('todos');
    }

    todosCollection
      .snapshotChanges()
      .pipe(map(res => {
        return res.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      }))
      .subscribe(todos => {
        this.todos = todos;
        this.todosChanged.next([...todos]);
      });
  }

  clearCompleted() {
    this.db.collection('todos', ref => ref.where('completed', '==', true))
      .get().subscribe((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.db.collection('todos').doc(doc.id).delete().then(res => {
            console.log('Todo successfully deleted!');
          }).catch(error => console.log(error));
        });
    });
  }

}
