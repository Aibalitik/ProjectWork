import React from 'react';
import {Button, Checkbox, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import { Icon } from '@iconify/react';
import trashFill from '@iconify/icons-eva/trash-fill';
import {format} from "date-fns";

const TodoList = ({ todos, deleteTodo, toggleCheck }) => (
    <List>
        {todos.map((todo) => (
            <ListItem key={todo.id} dense button onClick={() => toggleCheck(todo.id)}>
                <Checkbox size="medium" checked={todo.checked}/>
                <ListItemText className={todo.checked && 'checked-text'} primary={todo.name} />
                <ListItemText
                    className={todo.checked && 'checked-text'}
                    primary={format(todo.date, "MMMM do, yyyy H:mma")}
                />
                <ListItemSecondaryAction>
                    <Button onClick={() => {
                        deleteTodo(todo.id);
                    }}>
                        <Icon icon={trashFill} height={20} width={20} color="#A9A9A9" />
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default TodoList;
