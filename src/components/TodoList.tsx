import { useAppSelector } from '../redux/hooks.ts'
import { selectFilteredTodos } from '../redux/slices/todosSlice.ts'
import { TodoItem } from './TodoItem.tsx'

export const TodoList = () => {
  const todos = useAppSelector(selectFilteredTodos)

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>📝 List is empty. Add your first task!</p>
      </div>
    )
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
