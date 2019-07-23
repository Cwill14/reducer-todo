import React, { useReducer } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { reducer, initialState } from './reducers/reducer';
import { ADD_TODO } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const addItem = todo => {
    // e.preventDefault();
    dispatch({ type: ADD_TODO, payload: todo })
  }

  return (
    <div className="App">
      <List 
        todos={state.todos}
      />
      <Form
        addItem={addItem} 
      />
    </div>
  );
}

export default App;
