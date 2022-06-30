import { createContext, useEffect, useState } from 'react'
import { TodoInterface } from '../interfaces'

export const TodosContext = createContext({})

export const TodosContextProvider = ({ children }: any) => {
  const [clickedState, setClickedState]: any = useState('all')

  const [todos, setTodos]: any = useState(() => {
    const todosArray = localStorage.getItem('todos')

    return todosArray ? JSON.parse(todosArray) : []
  })

  const [filteredTodos, setFilteredTodos]: any = useState(() => {
    const todosArray = localStorage.getItem('todos')

    return todosArray ? JSON.parse(todosArray) : []
  })

  useEffect(() => {
    const newTodos = todos.filter((todo: TodoInterface) => {
      if (clickedState === 'all') {
        return true
      } else if (clickedState === 'active') {
        return !todo.completed
      } else if (clickedState === 'completed') {
        return todo.completed
      }
    })

    setFilteredTodos(newTodos)
  }, [clickedState, todos])

  const addTodo = (todo: TodoInterface) => {
    localStorage.setItem('todos', JSON.stringify([todo, ...todos]))

    setTodos([todo, ...todos])
  }

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo: TodoInterface) => todo.id !== id)

    setTodos(newTodos.map((value: TodoInterface, index: number) => ({ ...value, id: index + 1 })))

    localStorage.setItem(
      'todos',
      JSON.stringify(
        newTodos.map((value: TodoInterface, index: number) => ({ ...value, id: index }))
      )
    )
  }

  const handleCompleteTodo = (id: number) => {
    const todo = todos.find((todo: TodoInterface) => todo.id === id)

    if (todo) {
      todo.completed = !todo.completed
      localStorage.setItem('todos', JSON.stringify(todos))
      setTodos([...todos])
    }
  }

  const clearCompleted = () => {
    const newTodos = todos.filter((todo: TodoInterface) => !todo.completed)

    setTodos(newTodos.map((value: TodoInterface, index: number) => ({ ...value, id: index + 1 })))

    localStorage.setItem(
      'todos',
      JSON.stringify(
        newTodos.map((value: TodoInterface, index: number) => ({ ...value, id: index }))
      )
    )
  }

  const handleSetClickedState = (e: any) => {
    setClickedState(e.target.dataset.filter)
  }

  return (
    <TodosContext.Provider
      value={{
        clickedState,
        handleSetClickedState,
        todos,
        filteredTodos,
        addTodo,
        removeTodo,
        handleCompleteTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
