import P from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import { buildActions } from './build-actions';
import { reducer } from './reducer';

const Context = createContext();

export const initialState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = buildActions(dispatch);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined')
    throw new Error(
      'You have to use useCounterContext inside <CounterContextProvider/>',
    );

  return [...context];
};
