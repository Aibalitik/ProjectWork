import React from 'react';
import useTodoState from "./hooks/useTodoState";
import {Typography} from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
    const {todos, addTodo, deleteTodo, toggleCheck} = useTodoState([]);

    return (
        <div className='stack'>
            <Typography variant="h5">
                What task do you have for today?
            </Typography>

            <TodoForm
                saveTodo={(value, date) => {
                    addTodo(value.trim(), date);
                }}
            />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleCheck={toggleCheck}/>
        </div>
    );
}
