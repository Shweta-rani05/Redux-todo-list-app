import { useState } from "react";
import { useDispatch} from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const [task,setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler =(evt)=>{
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    };

    return (
        <>
        <form onSubmit={submitHandler}>
            <input 
            type ="text"
            value={task}
            placeholder="Enter a task ..." 
            onChange ={(e)=>setTask(e.target.value)}/> 
            <button>Add Task </button>
            <br/><br/>
            <hr/>
            
        </form>
        </>
    );

};


