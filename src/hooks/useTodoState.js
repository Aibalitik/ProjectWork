import { useState } from 'react';

export default initialValue => {
    const [todos, setTodos] = useState(initialValue);

    return {
        todos,
        toggleCheck: (id) => {
            setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.checked = !todo.checked;
                }
                return todo
            }));
        },
        addTodo: todoText => {
            setTodos([...todos, {id: todos.length + 1, name: todoText, checked: false}]);
        },
        deleteTodo: todoIndex => {
            setTodos(todos.filter(todo => todo.id !== todoIndex));
        }
    };
};
