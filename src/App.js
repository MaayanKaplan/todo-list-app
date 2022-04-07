import "./App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import AddTask from "./Components/AddTask";

import { useState } from "react";

const defaultTasks = [{ name: "Create a ToDo react app." }];

function App() {
  const [tasks, setTasks] = useState(defaultTasks);

  const addNewTaskEvent = (input) => {
    const newTasks = [...tasks];
    newTasks.push({ name: input });
    setTasks(newTasks);
    console.log(tasks);
  };

  return (
    <div className="App">
      <>
        <Header />
      </>

      <>
        <AddTask addNewTaskEvent={addNewTaskEvent} />
        <TaskList tasks={tasks}></TaskList>
      </>
    </div>
  );
}

export default App;
