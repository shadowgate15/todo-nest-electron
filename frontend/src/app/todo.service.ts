import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Observable<Todo[]> {
    const TODOS: Todo[] = [
      { id: 1, name: 'This is the first todo', completed: false },
      { id: 2, name: 'this is the second todo', completed: false },
    ];

    const todos = of(TODOS);

    return todos;
  }
}
