import React, {useState} from "react";

function NewTodoForm(props) {

  const [description, setDescription] = useState('');
  const [assigned, setAssigned] = useState('');

  const descriptionChange = (event) => {
    // event. target gives you the element that triggered the event. So, event. target. value retrieves the value of that element
    console.log('description', event.target.value);
    setDescription(event.target.value);
  }

  const assignedChange = (event) => {
    console.log('description', event.target.value);
    setAssigned(event.target.value);
  }

  const submitTodo = () => {
    if (assigned !== '' && description !== ''){
      props.addTodo(description, assigned);
      setDescription('');
      setAssigned('');
    }

  }

  return(
    <div className='mt-5'>
      <div className='mb-3'>
        <label className='form-label'>Assigned</label>
        <input 
          type='text' 
          className='form-control' 
          required
          //uses onChange hook to call assignedChange. assignedChange uses useState through setAssigned, which uses event.target.value to 
          //capture the value of the element that triggered the event
          onChange = {assignedChange}
          value = {assigned}>
        </input>
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea 
          className="form-control" 
          rows={3} 
          required
          onChange = {descriptionChange}
          value = {description}>
        </textarea>
      </div>
      <button 
        type='button' 
        className="btn btn-primary mt3"
        onClick={submitTodo}
        >Add Todo</button>
    </div>
  )
}

export default NewTodoForm;