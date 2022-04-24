import React from 'react'


function Form({inputText, setInputText, todos, setTodos, setSatus}) {

    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, {
            text:inputText,
            completed:false,
            id: Math.floor(Math.random() * 1000)
        }])
        setInputText('')
    }

  return (
     
    <form>
    <input type="text" className="todo-input" value={inputText} onChange={e => setInputText(e.target.value)} />
    <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select name="todos" className="filter-todo" onChange={e => setSatus(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>

 
  )
}

export default Form