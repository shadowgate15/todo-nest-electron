import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
} from '@nestjs/websockets';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Logger } from '@nestjs/common';

@WebSocketGateway(4001)
export class TodoGateway implements OnGatewayInit {
  private logger: Logger = new Logger('TodoGateway');

  constructor(private readonly todoService: TodoService) {}

  afterInit(server: any) {
    this.logger.log('Initialized');
  }

  @SubscribeMessage('createTodo')
  create(@MessageBody() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @SubscribeMessage('findAllTodo')
  findAll() {
    return this.todoService.findAll();
  }

  @SubscribeMessage('findOneTodo')
  findOne(@MessageBody() id: number) {
    return this.todoService.findOne(id);
  }

  @SubscribeMessage('updateTodo')
  update(@MessageBody() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(updateTodoDto.id, updateTodoDto);
  }

  @SubscribeMessage('removeTodo')
  remove(@MessageBody() id: number) {
    return this.todoService.remove(id);
  }
}
