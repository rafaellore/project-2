import { initialState } from '.';
import * as actionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };

    case actionTypes.DECREASE:
      return { ...state, counter: state.counter - 1 };

    case actionTypes.RESET:
      return { ...initialState };

    case actionTypes.SET_COUNTER:
      return { ...state, ...action.payload };

    case actionTypes.ASYNC_INCREASE_START:
      return { ...state, laoding: true };

    case actionTypes.ASYNC_INCREASE_END:
      return { ...state, laoding: false, counter: state.counter + 1 };

    case actionTypes.ASYNC_INCREASE_ERROR:
      return { ...state, laoding: false };
  }

  return state;
};
