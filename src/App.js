import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
// import Todo from "./Components/Todo";

function App() {
  // const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Adding a task
  const addTodo = (input) => {
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.floor(Math.random() * 10000) },
    ]);
    console.log(todos);
  };

  // Removing a task
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  // const removeTodo = (id) => {
  //   console.log("first");
  //   const removedArr = [...todos].filter((todo) => todo.id !== id);

  //   setTodos(removedArr);
  // };

  // // Complete task
  // const doneTodo = (event) => {
  //   event.preventDefault();
  //   console.log("DONE!");
  // };

  return (
    <div className="App">
      <>
        <Header />
      </>
      <>
        <AddTodo
          // todos={todos}
          // setTodos={setTodos}
          // input={input}
          // setInput={setInput}
          addTodo={addTodo}
        />
        <TodoList todos={todos} removeTodo={removeTodo} />
        {/* <Todo removeTodo={removeTodo} /> */}
      </>
    </div>
  );
}

export default App;
