import { useState } from 'react'
import { useAppDispatch } from '../redux/hooks.ts'
import { addTodo } from '../redux/slices/todosSlice.ts'

export const TodoInput = () => {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text.trim()))
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="input"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  )
}
