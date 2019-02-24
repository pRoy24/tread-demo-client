import {GET_USER_WALL, GET_USER_WALL_SUCCESS, GET_USER_WALL_FAILURE} from '../actions/board';

const initialState = { userWall: {}, isInit: true};

export  default function userReducer(state = initialState, action) {
  switch (action.type) {
   case GET_USER_WALL:
      return {...state}    
    case GET_USER_WALL_SUCCESS:
      return {...state, currentUser: currentUser, isInit: false}
    case GET_USER_WALL_FAILURE:
      return {...state, currentUser: {}, isInit: false}

    default:
      return {...state};
  }
}