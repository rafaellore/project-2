import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterContext';
import { PostsProvider } from '../../contexts/PostsContext';

export default function App() {
  return (
    <PostsProvider>
      <CounterProvider>
        <Posts />
      </CounterProvider>
    </PostsProvider>
  );
}
