import React from "react";
import "./Todo.css";
import { RiCloseCircleLine } from "react-icons/ri";

const Todo = ({ text, removeTodo, completeTodo }) => {
  return (
    <div className="todoContainer">
      <div className="icons">
        <RiCloseCircleLine onClick={removeTodo} className="delete-icon" />
      </div>
      <a onClick={completeTodo} href="#" className="todo">
        {text}
      </a>
    </div>
  );
};

export default Todo;
