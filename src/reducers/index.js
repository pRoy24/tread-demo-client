import { combineReducers } from 'redux'

import userReducer from './user';
import boardReducer from './board';

const cocReducer = combineReducers({
  board: boardReducer,
  user: userReducer,

})

export default cocReducer