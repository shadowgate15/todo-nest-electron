import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDocument } from './schemas/todo.schema';
export declare class TodoService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    create(createTodoDto: CreateTodoDto): Promise<TodoDocument>;
    findAll(): Promise<TodoDocument[]>;
    findOne(id: number): Promise<TodoDocument>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<TodoDocument>;
    remove(id: number): Promise<TodoDocument>;
}
