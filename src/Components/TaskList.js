import "./TaskList.css";
import Task from "./Task.js";

const TaskList = (props) => {
  const tasks = props.tasks;

  return (
    <div className="taskList">
      {tasks.map((task, idx) => (
        <Task key={idx} name={task.name} />
      ))}
    </div>
  );
};

export default TaskList;
