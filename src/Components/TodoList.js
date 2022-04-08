import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          text={todo.text}
          id={todo.id}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
