import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const addNewTodo = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <>
      <form onSubmit={addNewTodo}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="What do you need to do?"
        ></input>
        <button onClick={addNewTodo}>Add Task</button>
      </form>
    </>
  );
};

export default AddTodo;
