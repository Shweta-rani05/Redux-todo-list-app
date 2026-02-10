import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch} from "react-redux";
import { deleteTodo,markAsDone } from "../features/todo/todoSlice";


export default function Todo(){
    const todos = useSelector((state) => state.todos );
    console.log(todos );
    const dispatch = useDispatch();

    const clickHandler = (id) =>{
        console.log("delete",id);
        dispatch(deleteTodo(id));
    };

    const doneHandler = (id) => {
    dispatch(markAsDone(id));
  };

     
    return (
        <>
        <AddForm/>
        <h1>Todo List App </h1>
        <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "10px",
              textDecoration: todo.isDone ? "line-through" : "none",
              opacity: todo.isDone ? 0.6 : 1,
            }}
          >
            <span style={{ flex: 1, paddingRight: "20px" }}>
              {todo.task}
            </span>

            <div style={{ display: "flex", gap: "8px" }}>
              {!todo.isDone && (
                <button onClick={() => doneHandler(todo.id)}>
                   ✓
                </button>
              )}
              <button onClick={() => clickHandler(todo.id)}>
                 🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
        </>
    );
}



