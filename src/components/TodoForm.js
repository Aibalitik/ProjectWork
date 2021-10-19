import React from 'react';

import {Button, TextField} from "@mui/material";
import useFormFieldState from "../hooks/useFormFieldState";

const TodoForm = ({ saveTodo }) => {
    const { value, reset, onChange } = useFormFieldState();

    return (
        <form
            className={'form'}
            onSubmit={event => {
                event.preventDefault();
                saveTodo(value);
                reset();
            }}
        >
            <TextField
                margin="normal"
                variant="outlined"
                placeholder="Write your task"
                onChange={onChange}
                value={value}
                required
            />
            <Button variant="outlined" size={'large'} type='submit'>Add</Button>
        </form>
    );
};

export default TodoForm;
