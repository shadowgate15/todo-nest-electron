import { OnGatewayInit } from '@nestjs/websockets';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoGateway implements OnGatewayInit {
    private readonly todoService;
    private logger;
    constructor(todoService: TodoService);
    afterInit(server: any): void;
    create(createTodoDto: CreateTodoDto): Promise<import("./schemas/todo.schema").TodoDocument>;
    findAll(): Promise<import("./schemas/todo.schema").TodoDocument[]>;
    findOne(id: number): Promise<import("./schemas/todo.schema").TodoDocument>;
    update(updateTodoDto: UpdateTodoDto): Promise<import("./schemas/todo.schema").TodoDocument>;
    remove(id: number): Promise<import("./schemas/todo.schema").TodoDocument>;
}
