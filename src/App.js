import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Type up notes', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Set reading list', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Send job application', rowAssigned: 'User One'}
  ]
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          My tasks
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
