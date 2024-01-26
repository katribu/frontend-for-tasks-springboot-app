import {useState, useEffect} from 'react'
import { getTodos } from './api/fetch';

function App() {
const [todoList, setTodoList] = useState([]);

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
  <div key={todoElement.taskId}>
    <h3>{todoElement.description}</h3>
    <p>{todoElement.assignee}</p>
  </div>)
})

  return (
    <div className="App">
      <h1>Kat's Tasks</h1>
      <div>{renderTodoList}</div>
    </div>
  );
}

export default App;
