import React from "react";
import "./Todo.css";
import { RiCloseCircleLine } from "react-icons/ri";

const Todo = ({ text, id, removeTodo, todos }) => {
  const removeItem = (event) => {
    event.preventDefault();
    removeTodo(id);
  };

  return (
    <div className="todoContainer">
      <div className="icons">
        <RiCloseCircleLine onClick={removeItem} className="delete-icon" />
      </div>
      <a href="#" className="todo">
        {text}
      </a>
    </div>
  );
};

export default Todo;
