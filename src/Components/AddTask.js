import { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
  console.log("rendered !");
  const [input, setInput] = useState("");

  const CreateNewTaskHandler = (event) => {
    event.preventDefault();
    props.addNewTaskEvent(input);
  };

  return (
    <div className="AddTaskContainer">
      <form addNewTaskEvent={CreateNewTaskHandler}>
        <input
          type="text"
          placeholder="What do you need to do?"
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <button onClick={CreateNewTaskHandler}>Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
