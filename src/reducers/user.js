import {LOGIN_USER, AUTHORIZE_CREDENTIALS, AUTHORIZE_CREDENTIALS_SUCCESS, AUTHORIZE_CREDENTIALS_FAILURE,
  AUTHENTICATE_USER, AUTHENTICATE_USER_SUCCESS, AUTHENTICATE_USER_FAILURE
} from '../actions/user';

const initialState = { currentUser: {}, isInit: true};

export  default function userReducer(state = initialState, action) {
  switch (action.type) {
   case AUTHORIZE_CREDENTIALS:
      return {
        ...state, currentUser: {}, isInit: true
      }    
    case AUTHORIZE_CREDENTIALS_SUCCESS:
      let currentUser = action.payload.currentUser;
      const userToken = currentUser.user_web_token;
      localStorage.setItem("userToken", userToken);
      return {...state, currentUser: currentUser, isInit: false}
    case AUTHORIZE_CREDENTIALS_FAILURE:
      return {...state, currentUser: {}, isInit: false}
    case AUTHENTICATE_USER:
      return {...state, currentUser: {}, isInit: true}
    case AUTHENTICATE_USER_SUCCESS:
       currentUser = action.payload.currentUser;
      return {...state, currentUser: currentUser, isInit: false}
    case AUTHENTICATE_USER_FAILURE:
      return {...state, currentUser: {}, isInit: false}
    default:
      return {...state};
  }
}