import { useContext } from 'react'
import { InputComponent } from '../components/InputTodoCreator'
import { TodosContext } from '../context/TodosContext'
import { TodoInterface } from '../interfaces'

export const TodoList = () => {
  const { todos }: any = useContext(TodosContext)

  const options = {
    className:
      'rounded-none border-b dark:border-light_veryDarkGrayishBlue border-light_lightGrayishBlue',
  }

  return (
    <div className="shadow-2xl shadow-light_darkGrayishBlue dark:shadow-dark_veryDarkBlue">
      {todos.map((todo: TodoInterface) => (
        <InputComponent options={options} disabled {...todo} key={todo.id} />
      ))}
    </div>
  )
}
