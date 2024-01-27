import { useNavigate } from 'react-router-dom';
import './index.css';
import { useEffect, useState } from 'react';
import { createNewTask } from './api/fetch';

function NewTask(){

const [newTask, setNewTask] = useState({
   description: "",
   severity: 0,
   assignee: "",
   storyPoint: 0 
})    

const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();

    const setTask = await createNewTask(newTask)
    console.log(newTask)
    return setTask
}

useEffect(()=>{
    handleSubmit()
})

    return(
        <div className="new-task-container">
            <button onClick={()=>navigate("/")}>Back</button>
        <form onSubmit={handleSubmit}>
            <h1>Add a New Task</h1>

            <input 
            type="text"
            placeholder="description"
            value={newTask.description}
            onChange={(e) => setNewTask({description: e.target.value})}
            />

            <input 
            type="number"
            placeholder= "0"
            value={newTask.severity}
            onChange={(e) => setNewTask({severity: parseInt(e.target.value)})}
            />

            <input 
            type="text"
            placeholder="assignee"
            value={newTask.assignee}
            onChange={(e) => setNewTask({assignee: e.target.value})}
            />

            <input 
            type="number"
            placeholder="0"
            value={newTask.storyPoint}
            onChange={(e) => setNewTask({severity: parseInt(e.target.value)})}
            />


            <button type="submit">Submit</button>
        </form>
       </div>
    )
}

export default NewTask;