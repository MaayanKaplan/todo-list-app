import "./Todo.css";
import { RiCloseCircleLine } from "react-icons/ri";

const Todo = ({ text, id, removeTodo, completeTodo, todos }) => {
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
      <p
        onClick={checkItem}
        className={`todo ${todos[id].isCompleted ? "completed" : ""}`}
      >
        {text}
      </p>
      <RiCloseCircleLine onClick={removeItem} className="delete-icon" />
    </div>
  );
};

export default Todo;
