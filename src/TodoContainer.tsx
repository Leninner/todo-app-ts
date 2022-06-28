import { TodoHeader } from './components/TodoHeader'

export const TodoContainer = ({ isDark, changeTheme }: any) => {
  return (
    <div className="z-10 w-4/5 h-3/4 md:w-3/4 md:2/3 lg:w-1/2 lg:h-4/5 ">
      <TodoHeader changeTheme={changeTheme} isDark={isDark} />
    </div>
  )
}
