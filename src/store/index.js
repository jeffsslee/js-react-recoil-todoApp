import { atom } from "recoil";

export const inputValueState = atom({
  key: "inputValueStaste",
  default: "",
});
export const todoListState = atom({
  key: "todoListState",
  default: [],
});
