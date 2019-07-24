import React from 'react';
import Todo from './Todo';

const List = props => {
    console.log(props.todos);
    let sortedProps = props.todos.sort((a, b) => {
        return b.important - a.important;
    })
    let compSortedProps = sortedProps.sort((a, b) => {
        return a.completed - b.completed;
    })
    return (
        <div className="list">
            <h1>To-Do List</h1>
            {/* {props.todos.map(todo => { */}
            {compSortedProps.map(todo => {
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