import React from "react";
import './InputList.scss';


const InputList = (props) => {
    return (
       
        <div className='Add-tasks'>
            <input type="text" onChange={props.handleChange} value={props.newTask} placeholder='Add new task'/>
            <button onClick={props.AddTask}>Add task</button>
        </div>
        
       
    );
}

export default InputList