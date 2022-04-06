import "./Task.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Task = (props) => {
  return (
    <div className="taskContainer">
      {/* <input type="checkbox"></input> */}
      <IoIosCloseCircleOutline />
      <p className="task">{props.name}</p>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  );
};

export default Task;
