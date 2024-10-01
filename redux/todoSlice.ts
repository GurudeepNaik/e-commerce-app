import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a to-do item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define the initial state of the to-do list
interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export the actions generated from the slice
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

// Export the selector to access the state
export const selectTodos = (state: { todos: TodoState }) => state.todos.todos;

// Export the reducer to include in the store
export const todos = todoSlice.reducer;
