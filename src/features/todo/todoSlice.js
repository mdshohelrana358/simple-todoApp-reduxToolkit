import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  todos: [],
  isError: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      const item = {
        id: Math.round(Math.random() * 100),
        name: action.payload,
      };
      state.todos = [...state.todos, item];
    },
    deleteTodo: (state, action) => {
      const filterTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      state.todos = filterTodos;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
