import React, { useState } from 'react';

const Form = props => {
    const [todo, setTodo] = useState('');
    
    const handleChanges = e => {
        setTodo([e.target.name] = e.target.value)
    }

    const submit = e => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo('');
    }

    return (
        <form onSubmit={submit}>
            <input 
                type="text" 
                placeholder="task here"
                name="todo"
                value={todo}
                onChange={handleChanges}
                autoComplete="off"
            />
            <button className="addBtn">Add to List</button>
        </form>
    );
};

export default Form;