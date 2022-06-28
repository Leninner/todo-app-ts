import { useContext } from 'react'
import { InputComponent } from '../components/InputTodoCreator'
import { TodosContext } from '../context/TodosContext'

export const TodoList = () => {
  const { todos }: any = useContext(TodosContext)

  const options = {
    className:
      'rounded-none border-b dark:border-light_veryDarkGrayishBlue border-light_lightGrayishBlue',
  }
  return (
    <div className="shadow-2xl shadow-light_darkGrayishBlue dark:shadow-dark_veryDarkBlue">
      {todos.map((todo: any) => (
        <InputComponent options={options} disabled />
      ))}
    </div>
  )
}
