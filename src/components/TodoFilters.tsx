import { useAppDispatch, useAppSelector } from '../redux/hooks.ts'
import {
  setFilter,
  selectFilter,
  selectAllTodos,
} from '../redux/slices/todosSlice.ts'

export const TodoFilters = () => {
  const dispatch = useAppDispatch()
  const currentFilter = useAppSelector(selectFilter)
  const allTodos = useAppSelector(selectAllTodos)

  const filters: Array<'all' | 'active' | 'completed'> = [
    'all',
    'active',
    'completed',
  ]
  const filterLabels = {
    all: 'All',
    active: 'Active',
    completed: 'Completed',
  }

  const activeTodosCount = allTodos.filter((todo) => !todo.completed).length

  return (
    <div className="todo-filters">
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => dispatch(setFilter(filter))}
            className={`btn ${
              currentFilter === filter ? 'btn-active' : 'btn-secondary'
            }`}
          >
            {filterLabels[filter]}
          </button>
        ))}
      </div>
      <div className="todo-stats">
        <span>📊 Active tasks: {activeTodosCount}</span>
      </div>
    </div>
  )
}
