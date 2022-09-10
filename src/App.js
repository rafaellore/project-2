import React, { useReducer, useState } from 'react';

function App() {
  const initialState = {
    name: 'Rafael',
    age: 20,
    comment: 'i love games',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        return { ...state, name: action.payload };
    }
    return { ...state };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, age, comment } = state;

  const [input, setInput] = useState('');

  return (
    <div>
      <h1> Este é meu estado complexo:</h1>
      <p>{name}</p>
      <p>{age}</p>
      <p>{comment}</p>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escreva um nome.."
      />

      <button onClick={() => dispatch({ type: 'CHANGE_NAME', payload: input })}>
        Alterar
      </button>
    </div>
  );
}

export default App;
