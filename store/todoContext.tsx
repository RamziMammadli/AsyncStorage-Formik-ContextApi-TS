import { createContext, useState } from "react";
import { ITodo } from "./models/ITodo";
import { ToDoContextType } from "./models/ToDoContextType";

let datas = [
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description',
      status: true,
    },
  ]

export let TodoContext = createContext<ToDoContextType | null>(null);

interface Props {
    children?: React.ReactNode;
  }

export const ToDoProvider : React.FC<Props> = ({ children }) => {

    const [todos, settodos] = useState<ITodo[]>(datas);


    const saveTodo = (todo: ITodo) => {
        settodos([...todos, todo]);
    }

    const deleteTodo = (id: number) => {
        let filteredTodos = todos.filter(q => q.id != id);
        settodos(filteredTodos);
    }


    return <TodoContext.Provider
        value={{
            todos: todos,
            addTodo: saveTodo,
            deleteTodo: deleteTodo
        }}>
        {children}
    </TodoContext.Provider>


}