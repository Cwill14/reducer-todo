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
            
        </div>
    );
};

export default Todo;