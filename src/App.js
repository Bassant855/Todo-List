import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos') || []))
  const [status, setSatus] = useState('All')
  const [filteredTodos, setFilterTodos] = useState([])

  useEffect(() => {
    switch(status) {
      case 'completed':
      setFilterTodos(todos.filter((todo) => todo.completed === true))
      break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed === false))
        break;
        default:
          setFilterTodos(todos)
        break;
    }
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos, status])

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
      inputText= {inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setSatus={setSatus}
      />
      <TodoList 
      filteredTodos={filteredTodos}
      todos={todos}
       setTodos={setTodos}/>
    </div>
  );
}

export default App;
