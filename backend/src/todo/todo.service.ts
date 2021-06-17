import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schame';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  create(createTodoDto: CreateTodoDto) {
    const createdTodo = new this.todoModel(createTodoDto);

    return createdTodo.save();
  }

  findAll() {
    return this.todoModel.find().exec();
  }

  findOne(id: number) {
    return this.todoModel.findById(id).exec();
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
