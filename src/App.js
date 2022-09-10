import React, { createContext, useContext, useReducer, useRef } from 'react';
import * as P from 'prop-types';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
export const initialState = {
  title: 'O titulo do contexto',
  body: ' O body do contexto',
};

export const Context = createContext();
//AppContext

export const AppContext = ({ children }) => {
  //eslint-disable-next-line
  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_TITLE':
        return { ...state, title: action.payload };
    }

    return { ...state };
  };

  //eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// H1
export const H1 = () => {
  const { state, changeTitle } = useContext(Context);

  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} />
      <h1 onClick={() => changeTitle(inputRef.current.value)}>{state.title}</h1>
    </>
  );
};

// App
function App() {
  return (
    <AppContext>
      <H1 />
    </AppContext>
  );
}

export default App;
