import { ITodo } from "./ITodo"

export type ToDoContextType = {
    todos: ITodo[];
    addTodo: (model: ITodo) => void;
    deleteTodo: (id:number) => void
}