import React,{useState, useEffect} from 'react'
import Input from './components/Input'
import Text from './components/Text'

function AppOne() {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('All')
    const [filter, setFilter] = useState([])

    useEffect( () =>{
      switch(status) {
        case 'completed':
          setFilter(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
          setFilter(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilter(todos)
        break;
      }

    }, [status, todos])
    
  return (
    <div className='app'>
        <Input
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}/>
        <Text  todos={todos}
        setTodos={setTodos}
        filter={filter}/>
    </div>
  )
}

export default AppOne