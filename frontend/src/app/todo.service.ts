import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  uri = 'ws://localhost:4000';

  socket: any;

  constructor() {
    this.socket = io(this.uri);
  }

  getTodos(): Observable<Todo[]> {
    return new Observable(($: any) =>
      this.socket.emit('findAllTodo', (response: Todo[]) => {
        $.next(response);
      })
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return new Observable(($: any) =>
      this.socket.emit('createTodo', todo, (response: Todo) => {
        $.next(response);
      })
    );
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return new Observable(($: any) =>
      this.socket.emit('updateTodo', todo, (response: Todo) => {
        $.next(response);
      })
    );
  }
}
