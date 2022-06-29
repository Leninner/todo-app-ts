import { useState, useContext, FormEvent } from 'react'
import { TodosContext } from '../context/TodosContext'
import { InputComponent } from './TodoItems'

export const InputTodoCreator = () => {
  const { addTodo, todos }: any = useContext(TodosContext)
  const [text, setText] = useState('')
  const handleChange = (e: any) => setText(e.target.value)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    addTodo({
      id: todos.length + 1,
      text,
      completed: false,
    })

    setText('')
  }

  return (
    <form className="my-5" onSubmit={handleSubmit}>
      <InputComponent onChange={handleChange} text={text} />
    </form>
  )
}
