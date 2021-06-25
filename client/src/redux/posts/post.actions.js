import postActions from './post.action.types';

export const reactOnPost = (react = {like: 1}) => ({
  type: postActions.REACT_ON_POST,
  payload: react
})