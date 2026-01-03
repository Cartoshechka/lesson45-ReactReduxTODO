import { TodoInput } from './components/TodoInput.tsx'
import { TodoList } from './components/TodoList.tsx'
import { TodoFilters } from './components/TodoFilters.tsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>📝 TODO Redux App</h1>
          <p>Manage your tasks with Redux Toolkit</p>
        </header>

        <TodoInput />
        <TodoFilters />
        <TodoList />

        <footer className="app-footer">
          <p>💡 Uses Redux Toolkit for state management</p>
        </footer>
      </div>
    </div>
  )
}

export default App
