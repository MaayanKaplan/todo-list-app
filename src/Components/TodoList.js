import React from "react";
import "./TodoList.css";
import { RiCloseCircleLine } from "react-icons/ri";

const Todo = ({ text, id, removeTodo, completeTodo, todo }) => {
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
        className={`todo ${todo.isComplete ? "completed" : ""}`}
      >
        {text}
      </p>
      <RiCloseCircleLine onClick={removeItem} className="delete-icon" />
    </div>
  );
};
const TodoList = ({ todos, setTodos }) => {
  // Removing a task
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  // Checking the task
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          text={todo.text}
          id={todo.id}
          todo={todo}
          setTodos={setTodos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
