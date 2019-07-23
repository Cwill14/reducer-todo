import React from 'react';

const Todo = props => {
    return (
        <div>
            <h3>{props.todo.item}</h3>
            <p>{props.todo.id}</p>
        </div>
    );
};

export default Todo;