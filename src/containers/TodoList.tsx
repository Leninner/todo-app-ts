import { useContext } from 'react'
import { InputComponent } from '../components/TodoItems'
import { TodosContext } from '../context/TodosContext'
import { TodoInterface } from '../interfaces'

export const TodoList = () => {
  const { todos, handleCompleteTodo }: any = useContext(TodosContext)

  const options = {
    className:
      'rounded-none border-b dark:border-light_veryDarkGrayishBlue border-light_lightGrayishBlue',
  }

  return (
    <div className="shadow-2xl shadow-light_darkGrayishBlue dark:shadow-dark_veryDarkBlue">
      {todos.map((todo: TodoInterface) => (
        <InputComponent
          options={options}
          disabled
          {...todo}
          key={todo.id}
          onClick={() => (
            <div
              className={`w-6 h-6 rounded-full mr-5 ml-3 border border-dark_lightGrayishBlue dark:border-light_veryDarkGrayishBlue ${
                todo.completed &&
                'bg-gradient-to-r from-primary_checkBackgroundStart to-primary_checkBackgroundEnd'
              }`}
              onClick={() => handleCompleteTodo(todo.id)}
            />
          )}
        />
      ))}
    </div>
  )
}
