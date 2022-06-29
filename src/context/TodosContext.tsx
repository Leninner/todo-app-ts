import { createContext, useState } from 'react'
import { TodoInterface } from '../interfaces'

export const TodosContext = createContext({})

export const TodosContextProvider = ({ children }: any) => {
  const [todos, setTodos]: any = useState(() => {
    const todosArray = localStorage.getItem('todos')

    return todosArray ? JSON.parse(todosArray) : []
  })

  const addTodo = (todo: TodoInterface) => {
    localStorage.setItem('todos', JSON.stringify([todo, ...todos]))
    setTodos([todo, ...todos])
  }

  const removeTodo = (id: number) => {
    localStorage.setItem(
      'todos',
      JSON.stringify(todos.filter((todo: TodoInterface) => todo.id !== id))
    )

    setTodos(todos.filter((todo: TodoInterface) => todo.id !== id))
  }

  const handleCompleteTodo = (id: number) => {
    const todo = todos.find((todo: TodoInterface) => todo.id === id)

    if (todo) {
      todo.completed = !todo.completed
      localStorage.setItem('todos', JSON.stringify(todos))
      setTodos([...todos])
    }
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, handleCompleteTodo }}>
      {children}
    </TodosContext.Provider>
  )
}
