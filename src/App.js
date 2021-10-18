import React from 'react';
import useTodoState from "./components/useTodoState";
import {Button, Container, Stack, Typography} from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
    const { todos, addTodo, deleteTodo } = useTodoState([]);

    return (
        <Stack sx={{ textAlign:"center", mt: 5 }}>
            <Typography variant="h5">
                What task do you have for today?
            </Typography>

                <TodoForm
                    saveTodo={todoText => {
                        const trimmedText = todoText.trim();

                        if (trimmedText.length > 0) {
                            addTodo(trimmedText);
                        }
                    }}
                />

            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Stack>
    );
}