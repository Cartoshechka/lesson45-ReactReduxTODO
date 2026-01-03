import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// Типы для нашего стейта
export interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodosState {
  items: Todo[]
  filter: 'all' | 'active' | 'completed'
}

// Начальное состояние
const initialState: TodosState = {
  items: [],
  filter: 'all',
}

// Создаём slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Добавить todo
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      })
    },

    // Переключить статус
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((item) => item.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },

    // Удалить todo
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    // Изменить фильтр
    setFilter: (
      state,
      action: PayloadAction<'all' | 'active' | 'completed'>,
    ) => {
      state.filter = action.payload
    },
  },
})

// Экспортируем actions
export const { addTodo, toggleTodo, deleteTodo, setFilter } = todosSlice.actions

// Селекторы (для удобного доступа к данным)
export const selectAllTodos = (state: { todos: TodosState }) =>
  state.todos.items
export const selectFilter = (state: { todos: TodosState }) => state.todos.filter
export const selectFilteredTodos = (state: { todos: TodosState }) => {
  const { items, filter } = state.todos
  if (filter === 'active') return items.filter((todo) => !todo.completed)
  if (filter === 'completed') return items.filter((todo) => todo.completed)
  return items
}

// Экспортируем reducer
export default todosSlice.reducer
