import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import { store } from "./app/store";
import Todo from "./components/todo";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Provider store={store}>
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>
      </div>

      <Todo />
    </Provider>
  );
}

export default App;

