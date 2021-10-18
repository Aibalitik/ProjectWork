import React from 'react';

import {TextField} from "@mui/material";
import State from "./UseInoutState";

const TodoForm = ({ saveTodo }) => {
    const { value, reset, onChange } = State();

    return (
        <form
            onSubmit={event => {
                event.preventDefault();

                saveTodo(value);
                reset();
            }}
        >
            <TextField
                color="error"
                margin="normal"
                variant="outlined"
                placeholder="Write your task"
                onChange={onChange}
                value={value}
                sx={{ width:'20%' }}
            />
        </form>
    );
};

export default TodoForm;