import React from 'react'
import './TodoList.scss'


const TodoList = (props) => {
  return (
    <div className='myTask'>
      <div className='taskText'>
          <p>{props.id}</p>
          <h4 className='task'>{props.taskName}</h4>
      </div>
      
       <div className='taskBtns'>
          <button className={ props.completed ? "completedbtn" : "uncompletedbtn" } onClick={() => props.completeTask(props.id)}>{props.completed ? "DONE" : "NOT DONE YET"}</button>
          <button onClick={() => props.deleteAdd(props.id)}>Remove Task</button>
          
       </div>
       

    </div>
   
  );
}

export default TodoList
