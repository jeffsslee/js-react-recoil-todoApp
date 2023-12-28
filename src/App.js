import { useState } from "react";
import "./App.css";
import { useTodoList } from "./hooks/useTodoList";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <div className="main col-12">
      <h1>ToDo List</h1>
      <div className="main-display">
        <CreateTodo />
        <div className="display-section col-6">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
