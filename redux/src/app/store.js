import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/todo/todoSlice";

// addTodo is an example of sending data to the store.
// remove todo is an example of taking data from the store.

export const store = configureStore({
   reducer: todoReducers,
});
