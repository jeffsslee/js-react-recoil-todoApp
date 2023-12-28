import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { inputValueState, todoListState } from "../store";

export const useTodoList = () => {
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if ((inputValue === "") | (inputValue === null)) {
      alert("Input What to do first!");
    } else {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };
  const handleDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return {
    inputValue,
    changeInput,
    handleAdd,
    todoList,
    handleDelete,
  };
};
