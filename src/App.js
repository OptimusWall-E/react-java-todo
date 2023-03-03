import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Type up notes', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Set reading list', rowAssigned: 'User One'},
    {rowNumber: 3, rowDescription: 'Send job application', rowAssigned: 'User Two'},
    {rowNumber: 4, rowDescription: 'Prepare for interview', rowAssigned: 'User Two'}
  ]
  )

  // onClick=addTodo is a pointer. 
  // We don't add () or it will be called automatically, without being clicked
  const addTodo = (description, assigned) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
    }
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          My tasks
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' onClick={addTodo}>
            Add new task
          </button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
