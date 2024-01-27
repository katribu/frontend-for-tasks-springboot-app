import { useNavigate } from 'react-router-dom';
import './index.css';


function NewTask(){
const navigate = useNavigate();

    return(
        <div className="new-task-container">
            <button onClick={()=>navigate("/")}>Back</button>
        <form>
            <h1>Add a New Task</h1>
        </form>
       </div>
    )
}

export default NewTask;