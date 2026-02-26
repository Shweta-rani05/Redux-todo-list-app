import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import {
  playDoneSound,
  playDeleteSound,
  playCelebrateSound,
} from "../utils/audio";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // 🗑 DELETE HANDLER → celebration ONLY if last task
  const clickHandler = (id) => {
    // check BEFORE deleting
    const isLastTask = todos.length === 1;

    dispatch(deleteTodo(id));
    playDeleteSound();

    if (isLastTask) {
      setTimeout(() => {
        playCelebrateSound(); // 🎉 ONLY here
      }, 200);
    }
  };

  // ✓ DONE HANDLER → NO celebration
  const doneHandler = (id) => {
    dispatch(markAsDone(id));
    playDoneSound(); // only done sound
  };

  return (
    <>
      <AddForm />
      <h1>Todo List App</h1>

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
                <button onClick={() => doneHandler(todo.id)}>✓</button>
              )}
              <button onClick={() => clickHandler(todo.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}


