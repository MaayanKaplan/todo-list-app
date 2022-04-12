import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // Adding a task
  const addTodo = (input) => {
    setTodos([...todos, { text: input, isCompleted: false }]);
    console.log(todos);
  };

  return (
    <div className="App">
      <Header />

      <AddTodo addTodo={addTodo} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
