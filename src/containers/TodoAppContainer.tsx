import { TodoHeader } from '../components/TodoHeader'
import { TodoList } from './TodoList'
import { InputTodoCreator } from '../components/InputTodoCreator'
import { Footer } from '../components/TodoFooter'

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
