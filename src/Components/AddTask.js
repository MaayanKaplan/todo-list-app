import { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
  console.log("rendered !");
  const [name, setName] = useState("");

  const CreateNewTaskHandler = (event) => {
    event.preventDefault();
    props.addNewTaskEvent(name);
  };

  return (
    <div className="AddTaskContainer">
      <form>
        <input
          type="text"
          placeholder="What do you need to do?"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <button onClick={CreateNewTaskHandler}>Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
