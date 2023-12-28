import React from "react";
import { useTodoList } from "../hooks/useTodoList";

const TodoList = () => {
  const { todoList, handleDelete } = useTodoList();

  return todoList.length === 0 ? (
    <div className="item">
      <span>{"Nothing to do NOW! Great!"}</span>
    </div>
  ) : (
    todoList.map((todo, index) => {
      return (
        <div className="item" key={index}>
          <span>{todo}</span>
          <button
            className="btn-red btn-sm"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      );
    })
  );
};

export default TodoList;
