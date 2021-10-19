import React from 'react';
import {Button, Checkbox, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import { Icon } from '@iconify/react';
import trashFill from '@iconify/icons-eva/trash-fill';
const TodoList = ({ todos, deleteTodo }) => (
    <List>
        {todos.map((todo, index) => (
            <ListItem key={index.toString()} dense button>
                <Checkbox size="medium" color="error" tabIndex={-1} disableRipple />
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                    <Button onClick={() => {
                        deleteTodo(index);
                    }}>
                        <Icon icon={trashFill} height={20} width={20} color="#A9A9A9" />
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default TodoList;