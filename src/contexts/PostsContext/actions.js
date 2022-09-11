// ACTIONS - São funções que usamos para não precisar chamar o dispatch diretamente, como carregar posts nesse exemplo
import * as types from './types';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POSTS_LOADING });

  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();

  dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};
