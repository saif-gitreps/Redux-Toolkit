import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   todos: [{ id: "1", title: "Learn Redux" }],
};

// slice is a reducer and reducer is just functiona that takes state and action and returns new state

export const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {
      // in the method there are two params, 1 is state, 2 is action
      // this is syntax of redux toolkit
      // state gives you access to the current state.
      // action gives you access to the payload that you pass in the action.
      // payload is the data that you pass in the action.
      addTodo: (state, action) => {
         const newTodo = {
            id: nanoid(),
            title: action.payload,
         };
         // this todos prop comes from the initialState that we declared above.
         state.todos.push(newTodo);
      },
      removeTodo: (state, action) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      },
      updateTodo: (state, action) => {
         state.todos = state.todos.map((todo) =>
            todo.id === action.payload.id ? action.payload.title : todo
         );
      },
      toggleTodo: (state, action) => {
         state.todos = state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
         );
      },
   },
});

// this export is for components to use these actions.

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions;

// store needs all the reducers to be combined in one place.

export default todoSlice.reducer;
