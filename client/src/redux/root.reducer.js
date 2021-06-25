import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import gunReducer from './gun/gun.reducer';

export default combineReducers({
  user: userReducer,
  gun: gunReducer
})