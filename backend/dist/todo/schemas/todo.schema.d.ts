import { Document } from 'mongoose';
export declare type TodoDocument = Todo & Document;
export declare class Todo {
    name: string;
    completed: boolean;
}
export declare const TodoSchema: import("mongoose").Schema<Document<Todo, any>, import("mongoose").Model<any, any, any>, undefined>;
