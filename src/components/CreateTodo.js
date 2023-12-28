import React from "react";
import { useTodoList } from "../hooks/useTodoList";

const CreateTodo = () => {
  const { inputValue, changeInput, handleAdd } = useTodoList();
  return (
    <div className="input-section col-6">
      <input
        className="col-8"
        type="text"
        value={inputValue}
        onChange={changeInput}
        placeholder="What to do"
        autoFocus
      />
      <button className="btn-green col-2" onClick={handleAdd}>
        ADD
      </button>
    </div>
  );
};

export default CreateTodo;
