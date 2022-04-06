import "./App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import AddTask from "./Components/AddTask";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const defaultTasks = [{ name: "Create a ToDo react app." }];

function App() {
  const [tasks, setTasks] = useState(defaultTasks);

  const addNewTaskEvent = (name) => {
    const newTasks = [...tasks];
    newTasks.push({ name: name });
    setTasks(newTasks);
    console.log(tasks);
  };

  return (
    <div className="App">
      <>
        <Header />
      </>

      <>
        <TaskList tasks={tasks}></TaskList>
        <AddTask addNewTaskEvent={addNewTaskEvent} />
      </>
    </div>
  );
}

export default App;
