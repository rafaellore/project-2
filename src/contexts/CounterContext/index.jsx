import { CounterContext } from './context';
import P from 'prop-types';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './data';

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};
