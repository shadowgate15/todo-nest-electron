import { OnGatewayInit } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
export declare class TodoGateway implements OnGatewayInit {
    private readonly todoService;
    server: Server;
    private logger;
    constructor(todoService: TodoService);
    afterInit(server: any): void;
    create(createTodoDto: CreateTodoDto): Promise<import("./schemas/todo.schema").Todo>;
    findAll(): Promise<import("./schemas/todo.schema").Todo[]>;
    findOne(id: string): Promise<import("./schemas/todo.schema").Todo>;
    update(updateTodoDto: UpdateTodoDto): Promise<import("./schemas/todo.schema").TodoDocument>;
    remove(id: string): Promise<import("./schemas/todo.schema").TodoDocument>;
}
