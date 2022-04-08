import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
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
  // const removeTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };

  const removeTodo = (id) => {
    console.log("clicked");
    const removedArr = [...todos];
    removedArr.filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  // Complete task
  const completeTodo = () => {
    console.log("Done!");
  };

  return (
    <>
      <div className="App">
        <Header />

        <AddTodo addTodo={addTodo} />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      </div>
    </>
  );
}

export default App;
