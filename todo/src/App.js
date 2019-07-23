import React, { useReducer } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { reducer, initialState, ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const addTodo = todo => {
    // e.preventDefault();
    dispatch({ type: ADD_TODO, payload: todo })
  }

  const toggleTodo = id => {
    dispatch({ type: TOGGLE_TODO, payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED })
  }

  console.log(state);
  return (
    <div className="App">
      <List 
        todos={state.todos}
        toggleTodo={toggleTodo}
      />
      <Form
        addTodo={addTodo} 
      />
      <button onClick={e => {
        e.preventDefault();
        clearCompleted();
      }}>Clear Completed</button>
    </div>
  );
}

export default App;
