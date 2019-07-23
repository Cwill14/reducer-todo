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
                placeholder="to-do here"
                name="todo"
                value={todo}
                onChange={handleChanges}
            />
            <button>Add to List</button>
        </form>
    );
};

export default Form;