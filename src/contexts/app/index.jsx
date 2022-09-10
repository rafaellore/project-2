import { createContext, useState } from 'react';
import { contextInitialValue } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [state, setState] = useState(contextInitialValue);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
