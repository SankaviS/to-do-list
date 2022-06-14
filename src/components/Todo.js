import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Todo = ({ todos, setTodos, setEdit }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = ({ id }) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todos.id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const Findedit = todos.find((todo) => todo.id === id);
    setEdit(Findedit);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          {/* <button
            className="button-complete task-button"
            onClick={() => {
              handleComplete(todo);
            }}
          >
            <CheckIcon />
          </button> */}
          <button
            className="button-edit task-button"
            onClick={() => {
              handleEdit(todo);
            }}
          >
            <ModeEditOutlineIcon />
          </button>
          <button
            className="button-delete task-button"
            onClick={() => {
              handleDelete(todo);
            }}
          >
            <DeleteOutlineIcon />
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todo;
