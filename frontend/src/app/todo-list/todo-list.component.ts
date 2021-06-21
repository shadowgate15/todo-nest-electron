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
    this.todoService.getTodos().subscribe((todos: any) => {
      console.log('subscription response: ', todos);
      this.todos = todos;
    });

    console.log(this.todos);
  }

  onAddTodo(): void {
    this.todoService
      .addTodo(this.addForm.value)
      .subscribe((todo) => this.todos.push(todo));
    this.addForm.reset();
  }
}
