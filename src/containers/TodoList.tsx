import { useContext, useState } from 'react'
import { InputComponent } from '../components/TodoItems'
import { TodosContext } from '../context/TodosContext'
import { TodoInterface } from '../interfaces'

export const TodoList = () => {
  const { todos, handleCompleteTodo }: any = useContext(TodosContext)

  const optionsStyles = {
    className:
      'rounded-none border-b dark:border-light_veryDarkGrayishBlue border-light_lightGrayishBlue',
  }

  return (
    <section className="shadow-2xl shadow-light_darkGrayishBlue dark:shadow-dark_veryDarkBlue">
      {todos.map((todo: TodoInterface) => (
        <InputComponent
          optionsStyles={optionsStyles}
          disabled
          {...todo}
          key={todo.id}
          onClick={() => <BurbujaComponent handleCompleteTodo={handleCompleteTodo} {...todo} />}
        />
      ))}
    </section>
  )
}

const BurbujaComponent = ({ handleCompleteTodo, completed, id }: any) => {
  return (
    <div
      className={`w-6 h-6 rounded-full mr-5 ml-3 border border-dark_lightGrayishBlue dark:border-light_veryDarkGrayishBlue ${
        completed &&
        'bg-gradient-to-r from-primary_checkBackgroundStart to-primary_checkBackgroundEnd'
      }`}
      onClick={() => handleCompleteTodo(id)}
    />
  )
}
