import "./App.css";
import Header from "./components/Header";
import Forms from "./components/Forms";
import Todo from "./components/Todo";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Forms
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            setEdit={setEdit}
            edit={edit}
          />
        </div>
        <div>
          <Todo todos={todos} setTodos={setTodos} setEdit={setEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
