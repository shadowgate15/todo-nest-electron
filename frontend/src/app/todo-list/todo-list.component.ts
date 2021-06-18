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
    this.todos = this.todoService.getTodos();
  }

  onAddTodo(): void {
    this.todoService.addTodo(this.addForm.value);
    this.addForm.reset();
  }
}
