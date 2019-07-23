import React from 'react';
import Todo from './Todo';

const List = props => {
    return (
        <div>
            {props.todos.map(todo => {
                return <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />
            })}
        </div>
    );
};

export default List;