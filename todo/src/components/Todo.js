import React from 'react';

const Todo = props => {
    return (
        <div>
            <button 
                className={props.todo.completed ? "todoBtn completed" : "todoBtn"}
                onClick={(e) => {
                    e.preventDefault();
                    props.toggleTodo(props.todo.id)
                }}
            >
                <h4>{props.todo.item}</h4>
            </button>
            <button 
                className={`importantBtn ${props.todo.important ? "important" : ""}`}
                onClick={e => {
                    e.preventDefault();
                    props.toggleImportant(props.todo.id);
                }}
            >!</button>
 
        </div>
    );
};

export default Todo;