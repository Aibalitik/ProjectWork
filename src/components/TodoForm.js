import React from 'react';
import {Button, TextField} from "@mui/material";
import useFormFieldsState from "../hooks/useFormFieldsState";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {DateTimePicker} from "@mui/lab";

const TodoForm = ({ saveTodo }) => {
    const { value, reset, onChangeValue, onChangeDate, date } = useFormFieldsState();

    return (
        <form
            className={'form'}
            onSubmit={event => {
                event.preventDefault();
                if (date) {
                    saveTodo(value, date);
                    reset();
                }
            }}
        >
            <TextField
                margin="normal"
                variant="outlined"
                placeholder="Write your task"
                onChange={onChangeValue}
                value={value}
                required
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => <TextField
                        style={{marginLeft: '10px'}}
                        margin={'normal'} {...props}
                    />}
                    label="Date and time"
                    value={date}
                    onChange={onChangeDate}
                />
            </LocalizationProvider>
            <Button variant="outlined" size={'large'} type='submit'>Add</Button>
        </form>
    );
};

export default TodoForm;
