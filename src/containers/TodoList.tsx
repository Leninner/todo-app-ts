import { useContext, memo, useCallback } from 'react'
import { InputComponent } from '../components/TodoItems'
import { TodosContext } from '../context/TodosContext'
import { TodoInterface } from '../interfaces'

export const TodoList = memo(() => {
  const { handleCompleteTodo, removeTodo, filteredTodos }: any = useContext(TodosContext)

  const optionsStyles = {
    className:
      'rounded-none border-b dark:border-light_veryDarkGrayishBlue border-light_lightGrayishBlue',
  }

  return (
    <section className=" overflow-auto overscroll-contain h-[20rem] dark:bg-dark_veryDarkDesaturatedBlue bg-light_veryLightGray">
      {filteredTodos.map((todo: TodoInterface) => (
        <InputComponent
          key={todo.id}
          {...todo}
          onComplete={() => <BurbujaComponent handleCompleteTodo={handleCompleteTodo} {...todo} />}
          onDelete={() => removeTodo(todo.id)}
          optionsStyles={optionsStyles}
          disabled
        />
      ))}
    </section>
  )
})

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
