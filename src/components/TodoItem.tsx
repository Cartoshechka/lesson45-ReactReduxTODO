import { useAppDispatch } from '../redux/hooks.ts'
import { toggleTodo, deleteTodo } from '../redux/slices/todosSlice.ts'
import type { Todo } from '../redux/slices/todosSlice.ts'

interface TodoItemProps {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch()

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="btn btn-danger"
      >
        🗑️
      </button>
    </div>
  )
}
