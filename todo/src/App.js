import React, { useReducer } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { reducer, initialState, ADD_TODO, TOGGLE_TODO, TOGGLE_IMPORTANT, CLEAR_COMPLETED } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const addTodo = todo => {
    dispatch({ type: ADD_TODO, payload: todo })
  }

  const toggleTodo = id => {
    dispatch({ type: TOGGLE_TODO, payload: id })
  }

  const toggleImportant = id => {
    dispatch({ type: TOGGLE_IMPORTANT, payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED })
  }

  return (
    <div className="App">
      <List 
        todos={state.todos}
        toggleTodo={toggleTodo}
        toggleImportant={toggleImportant}
      />
      <div className="botContainer">
        <Form
          addTodo={addTodo} 
        />
      </div>
        <button
          className="clearBtn"
          onClick={e => {
            e.preventDefault();
            clearCompleted();
          }}>
            Clear Completed
        </button>
    </div>
  );
}

export default App;
