"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const todo_service_1 = require("./todo.service");
let TodoGateway = class TodoGateway {
    constructor(todoService) {
        this.todoService = todoService;
        this.logger = new common_1.Logger('TodoGateway');
    }
    afterInit(server) {
        this.logger.log('Initialized');
    }
    async create(createTodoDto) {
        return this.todoService.create(createTodoDto);
    }
    async findAll() {
        return this.todoService.findAll();
    }
    async findOne(id) {
        return this.todoService.findOne(id);
    }
    async update(updateTodoDto) {
        return this.todoService.update(updateTodoDto._id, updateTodoDto);
    }
    async remove(id) {
        return this.todoService.remove(id);
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], TodoGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage('createTodo'),
    __param(0, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoGateway.prototype, "create", null);
__decorate([
    websockets_1.SubscribeMessage('findAllTodo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoGateway.prototype, "findAll", null);
__decorate([
    websockets_1.SubscribeMessage('findOneTodo'),
    __param(0, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoGateway.prototype, "findOne", null);
__decorate([
    websockets_1.SubscribeMessage('updateTodo'),
    __param(0, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoGateway.prototype, "update", null);
__decorate([
    websockets_1.SubscribeMessage('removeTodo'),
    __param(0, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoGateway.prototype, "remove", null);
TodoGateway = __decorate([
    websockets_1.WebSocketGateway(),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoGateway);
exports.TodoGateway = TodoGateway;
//# sourceMappingURL=todo.gateway.js.map