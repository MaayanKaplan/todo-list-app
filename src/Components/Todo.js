import "./Todo.css";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const Todo = ({ text, id, removeTodo, completeTodo, todos }) => {
  const [style, setStyle] = useState({ display: "none" });

  const removeItem = (event) => {
    event.preventDefault();
    removeTodo(id);
  };

  const checkItem = (event) => {
    event.preventDefault();
    completeTodo(id);
  };

  return (
    <div className="todoContainer">
      <div
        className={`todo ${todos[id].isCompleted ? "completed" : ""}`}
        onMouseEnter={(event) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(event) => {
          setStyle({ display: "none" });
        }}
      >
        <p onClick={checkItem}>{text}</p>
        <RiCloseCircleLine
          style={style}
          onClick={removeItem}
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default Todo;
