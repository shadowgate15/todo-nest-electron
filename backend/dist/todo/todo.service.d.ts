import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';
export declare class TodoService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<TodoDocument>;
    remove(id: string): Promise<TodoDocument>;
}
