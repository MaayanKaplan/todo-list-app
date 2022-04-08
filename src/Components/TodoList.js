import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          text={todo.text}
          id={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
