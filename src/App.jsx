import React, {useState} from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import InputList from './components/InputList';


function App() {

  const [todoList,setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")
  const [ color, setColor] = useState(true)

  
  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  //Add new task

  const AddTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    if( newTask.length > 0) {
      setTodoList([...todoList, task])
      setNewTask("")
    } else{return}
  }

  // detele task

  const deleteAdd = (id) => {
   setTodoList(todoList.filter((task) => task.id !== id))
  }

 //completed task

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === id && task.completed === false){
          return {...task, completed: true}
        } else if (task.id === id && task.completed === true){
            return {...task, completed: false}
          }
        else {
          return task
        }
        
      })
    )
  }
 
  return (
    <div className='App-header '>
      <div className='container'>
        <div>
        <InputList handleChange={handleChange}
                     newTask={newTask} 
                     AddTask={AddTask}
        />
        </div>

        <div className='list'>
          {todoList.map((task) => {
          return <TodoList 
                    taskName={task.taskName} 
                    id={task.id}
                    deleteAdd={deleteAdd}
                    completeTask={completeTask}
                    completed={task.completed}
                    text={task.text}
                    color={task.color}
                      />
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
