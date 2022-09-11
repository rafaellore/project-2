import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/CounterContext/actions';
import { CounterContext } from '../../contexts/CounterContext/context';
import { loadPosts } from '../../contexts/PostsContext/actions';
import { PostsContext } from '../../contexts/PostsContext/context';

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const counterContext = useContext(CounterContext);

  const { postsState, postsDispatch } = postsContext;
  const { counterState, counterDispatch } = counterContext;
  useEffect(() => {
    console.log('chamou');
    loadPosts(postsDispatch);
  }, [postsDispatch]);

  return (
    <>
      <h1>{counterState.counter}</h1>

      <button onClick={() => decrementCounter(counterDispatch)}>
        Decrement
      </button>

      <button onClick={() => incrementCounter(counterDispatch)}>
        Increment
      </button>

      {postsState.loading && <h1>Carregando</h1>}

      {postsState.posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </>
  );
};
