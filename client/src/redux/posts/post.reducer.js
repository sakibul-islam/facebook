import posts from '../../posts';
import postActions from './post.action.types';

const INITIAL_STATE = {
  posts: posts
}

const postsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case postActions.REACT_ON_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          state.posts[1]
        ]
      }
    default:
      return {
        ...state
      }
  }
}

export default postsReducer;