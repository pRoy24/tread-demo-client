import { combineReducers } from 'redux'

import userReducer from './user';

const cocReducer = combineReducers({

  user: userReducer,

})

export default cocReducer