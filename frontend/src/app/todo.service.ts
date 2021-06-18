import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    { id: 1, name: 'This is the first todo', completed: false },
    { id: 2, name: 'this is the second todo', completed: false },
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
