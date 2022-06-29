import { TodoHeader } from '../components/TodoHeader'
import { TodoList } from './TodoList'
import { InputTodoCreator } from '../components/InputTodoCreator'
import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'
import { TodoInterface } from '../interfaces'

export const TodoAppContainer = ({ isDark, changeTheme }: any) => {
  return (
    <div className="z-10 w-4/5 h-3/4 md:w-3/4 md:h-2/3 lg:w-144 lg:h-4/5 ">
      <TodoHeader changeTheme={changeTheme} isDark={isDark} />
      <InputTodoCreator />
      <div className="shadow-2xl shadow-light_darkGrayishBlue dark:shadow-dark_veryDarkBlue">
        <TodoList />
        <Footer />
      </div>
    </div>
  )
}

const Footer = () => {
  const { todos, clearCompleted, clickedState, handleSetClickedState }: any =
    useContext(TodosContext)

  const totalCount = todos.reduce((acc: number, curr: TodoInterface) => {
    curr.completed === false ? acc++ : acc
    return acc
  }, 0)

  return (
    <section className="flex items-center justify-between py-3 bg-light_veryLightGray border-t-light_lightGrayishBlue dark:bg-dark_veryDarkDesaturatedBlue dark:border-t-light_veryDarkGrayishBlue w-full border-t px-5 dark:text-light_veryDarkGrayishBlue text-light_darkGrayishBlue">
      <span className="flex-1 cursor-default">{totalCount} items left</span>

      <ul
        className="flex items-center flex-1 justify-between font-bold"
        onClick={handleSetClickedState}
      >
        <li
          className={`cursor-pointer hover:text-dark_veryDarkDesaturatedBlue dark:hover:text-light_veryLightGray 
        ${clickedState === 'all' && 'text-primary_brigthBlue'}
        `}
          data-filter="all"
        >
          All
        </li>
        <li
          className={`cursor-pointer hover:text-dark_veryDarkDesaturatedBlue dark:hover:text-light_veryLightGray 
        ${clickedState === 'active' && 'text-primary_brigthBlue'}
        `}
          data-filter="active"
        >
          Active
        </li>
        <li
          className={`cursor-pointer hover:text-dark_veryDarkDesaturatedBlue dark:hover:text-light_veryLightGray 
        ${clickedState === 'completed' && 'text-primary_brigthBlue'}
        `}
          data-filter="completed"
        >
          Completed
        </li>
      </ul>

      <span className="flex-1 text-right cursor-pointer hover:text-danger" onClick={clearCompleted}>
        Clear Completed
      </span>
    </section>
  )
}
