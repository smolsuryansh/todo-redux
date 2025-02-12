import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    // todos: [{
    //     id: 1,
    //     text: 'Hello',
    // }]
    todos: [],
    theme: 'dark',
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                priority: false,
                completion: false,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);

            if (todo) {
                todo.text = action.payload.text;
            }
        },
        togglePriority: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);

            if (todo) {
                todo.priority = !todo.priority; // toggling
            }
        },
        toggleCompletion: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);

            if (todo) {
                todo.completion = !todo.completion; // toggle
            }
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        }
    }
})

export const { addTodo, removeTodo, updateTodo, togglePriority, toggleCompletion, toggleTheme } = todoSlice.actions;

export default todoSlice.reducer;