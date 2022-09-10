import { useContext } from 'react';
import { GlobalContext } from '../../contexts/app';

export const H1 = () => {
  const { state } = useContext(GlobalContext);

  return <h1>{`${state.name} ${state.age}`}</h1>;
};
