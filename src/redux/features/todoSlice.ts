import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo!.isCompleted = !todo.isCompleted; // "!." ---> exactly isCompleted is boolean value
        state.todos.sort(
          (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
        );
      }
    },
    filteredByPriority: (state, action: PayloadAction<string>) => {
      const priority = action.payload;
      state.todos = state.todos
        .filter((todo) => todo.priority === priority && !todo.isCompleted)
        .concat(
          state.todos.filter(
            (todo) => todo.priority !== priority && !todo.isCompleted
          )
        )
        .concat(state.todos.filter((todo) => todo.isCompleted));
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, filteredByPriority } =
  todoSlice.actions;
export default todoSlice.reducer;
