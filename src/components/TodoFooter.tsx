import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'
import { FilterList } from './FilterList'
import { TodoInterface } from '../interfaces'

export const Footer = () => {
  const { todos, clearCompleted, clickedState, handleSetClickedState }: any =
    useContext(TodosContext)

  const totalCount = todos.reduce((acc: number, curr: TodoInterface) => {
    curr.completed === false ? acc++ : acc
    return acc
  }, 0)

  const commonStyles =
    'flex items-center justify-between py-3 bg-light_veryLightGray border-t-light_lightGrayishBlue dark:bg-dark_veryDarkDesaturatedBlue dark:border-t-light_veryDarkGrayishBlue w-full border-t px-5 dark:text-light_veryDarkGrayishBlue text-light_darkGrayishBlue'

  return (
    <>
      {window.innerWidth > 768 ? (
        <section className={commonStyles}>
          <span className="flex-1 cursor-default">{totalCount} items left</span>

          <FilterList clickedState={clickedState} handleSetClickedState={handleSetClickedState} />

          <span
            className="flex-1 text-right cursor-pointer hover:text-danger"
            onClick={clearCompleted}
          >
            Clear Completed
          </span>
        </section>
      ) : (
        <>
          <section className={commonStyles}>
            <span className="flex-1 cursor-default">{totalCount} items left</span>

            <span
              className="flex-1 text-right cursor-pointer hover:text-danger"
              onClick={clearCompleted}
            >
              Clear Completed
            </span>
          </section>
          <FilterList
            clickedState={clickedState}
            handleSetClickedState={handleSetClickedState}
            mobile
            commonStyles={commonStyles}
          />
        </>
      )}
    </>
  )
}
