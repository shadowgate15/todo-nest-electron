import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@WebSocketGateway()
export class TodoGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('TodoGateway');

  constructor(private readonly todoService: TodoService) {}

  afterInit(server: any) {
    this.logger.log('Initialized');
  }

  @SubscribeMessage('createTodo')
  async create(@MessageBody() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @SubscribeMessage('findAllTodo')
  async findAll() {
    return this.todoService.findAll();
  }

  @SubscribeMessage('findOneTodo')
  async findOne(@MessageBody() id: string) {
    return this.todoService.findOne(id);
  }

  @SubscribeMessage('updateTodo')
  async update(@MessageBody() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(updateTodoDto._id, updateTodoDto);
  }

  @SubscribeMessage('removeTodo')
  async remove(@MessageBody() id: string) {
    return this.todoService.remove(id);
  }
}
