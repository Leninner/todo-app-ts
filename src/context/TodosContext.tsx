import { createContext, useState } from 'react'
import { TodoInterface } from '../interfaces'

export const TodosContext = createContext({})

export const TodosContextProvider = ({ children }: any) => {
  const [todos, setTodos]: any = useState([
    {
      id: 1,
      text: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      text: 'Learn Redux Js',
      completed: false,
    },
    {
      id: 3,
      text: 'Learn Next Js',
      completed: false,
    },
    {
      id: 4,
      text: 'Learn TypeScript',
      completed: false,
    },
  ])

  const addTodo = (todo: TodoInterface) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo: TodoInterface) => todo.id !== id))
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>{children}</TodosContext.Provider>
  )
}
