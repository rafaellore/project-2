import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  console.log(state);

  return <div>OI</div>;
};
