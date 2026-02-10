import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (!task.trim()) {
      setError("Task cannot be empty");
      return;
    }

    dispatch(addTodo(task.trim()));
    setTask("");
    setError("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => {
            setTask(e.target.value);
            setError("");
          }}
        />
        <button>Add Task</button>

        {error && (
          <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
        )}

        <hr />
      </form>
    </>
  );
}



  


