import "./Task.css";
import { RiCloseCircleLine } from "react-icons/ri";
// import { useState } from "react";

const Task = (props) => {
  const removeTask = (event) => {
    event.preventDefault();
    console.log("clicked!");
  };

  const doneTask = (event) => {
    event.preventDefault();
    console.log("DONE!");
  };

  return (
    <>
      <div className="taskContainer">
        <div className="icons">
          <RiCloseCircleLine onClick={removeTask} className="delete-icon" />
        </div>
        <a href="#" onClick={doneTask} className="task">
          {props.name}
        </a>
      </div>
    </>
  );
};

export default Task;
