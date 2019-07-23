import React from 'react';
import Todo from './Todo';

const List = props => {
    return (
        <div>
            <h1>To-Do List</h1>
            {props.todos.map(todo => {
                return <Todo 
                    todo={todo} 
                    key={todo.id} 
                    toggleTodo={props.toggleTodo}
                    toggleImportant={props.toggleImportant} 
                />
            })}
        </div>
    );
};

export default List;