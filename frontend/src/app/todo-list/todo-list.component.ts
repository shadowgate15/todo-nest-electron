import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  addForm = this.formBuilder.group({
    name: '',
    completed: false,
  });

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos: Array<Todo>) => {
      console.log(todos);
      this.todos = todos;
    });
  }

  onAddTodo(): void {
    this.todoService
      .addTodo(this.addForm.value)
      .subscribe((todo: Todo) => this.todos.push(todo));
    this.addForm.reset();
  }

  onToggleCompletion(event: MouseEvent): void {
    const todo: Todo = this.todos.find((todo: Todo) => todo._id === (event.target as HTMLInputElement).value) as Todo;
    // toggle todo completion state
    todo.completed = !todo.completed;

    console.log(todo);

    this.todoService
      .updateTodo(todo)
      .subscribe((todo: Todo) => {
        this.todos.forEach((elem: Todo) => {
          if (elem._id === todo._id) return todo;
          return elem;
        });
      });
  }
}
