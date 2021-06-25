import userActions from './user.action.types';

export const setUser = (user) => ({
  type: userActions.SET_CURRENT_USER,
  payload: user
});

