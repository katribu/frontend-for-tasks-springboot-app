import {useState, useEffect, } from 'react'
import { getTodos } from './api/fetch';
import { useNavigate } from 'react-router-dom';

function App() {
const [todoList, setTodoList] = useState([]);
const navigate = useNavigate();
const getTodoList = async() => {
  try{
   const allTodos = await getTodos();
   setTodoList(allTodos)
  }catch(error){
    console.log(error.message)
  }
}

useEffect(() => {
  getTodoList();
},[])

const renderTodoList = todoList.map(todoElement => {
  return (
  <div key={todoElement.taskId} className="todo-container">
    <h3>Description: {todoElement.description}</h3>
    <p>Assignee: {todoElement.assignee}</p>
    <p>Severity: {todoElement.severity}</p>
    <hr></hr>
  </div>)
})

  return (
    <div className="App">
      <h1>Kat's Tasks</h1>
      <button onClick={() => navigate("/newtask")}>New Task</button>
      <div className="list-container">{renderTodoList}</div>
    </div>
  );
}

export default App;
