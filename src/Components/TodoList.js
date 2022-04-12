import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  // Removing a task
  const removeTodo = (id) => {
    const removedArr = [...todos];
    removedArr.splice(id, 1);
    setTodos(removedArr);
  };

  // Checking a task
  const completeTodo = (id) => {
    let checkedTodos = [...todos];
    checkedTodos[id].isCompleted = !checkedTodos[id].isCompleted;
    setTodos(checkedTodos);
  };

  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          text={todo.text}
          id={index}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          todos={todos}
        />
      ))}
    </>
  );
};

export default TodoList;
