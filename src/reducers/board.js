import {GET_USER_WALL, GET_USER_WALL_SUCCESS, GET_USER_WALL_FAILURE, GET_USER_PROFILES,
  GET_USER_PROFILES_SUCCESS, GET_USER_PROFILES_FAILURE, GET_PROFILE_WALL, GET_PROFILE_WALL_SUCCESS,
  GET_PROFILE_WALL_FAILURE
} from '../actions/board';

const initialState = { userWall: [], userProfiles: [], isInit: true, userProfileInit: true, nextPage: 1, profileWall: []};

export  default function userReducer(state = initialState, action) {
  switch (action.type) {
    // User Wall   
    case GET_USER_WALL:
      return {...state, isInit: true}    
    case GET_USER_WALL_SUCCESS:
      let {data, next} = action.payload;
      let currentWall = state.userWall;
      if (next !== state.nextPage) {
        currentWall = currentWall.concat(data); 
      }
      return {...state, userWall: currentWall, isInit: false, nextPage: next}
    case GET_USER_WALL_FAILURE:
      return {...state, userWall: {}, isInit: false}
    // User Profiles  
    case GET_USER_PROFILES:
      return {...state, userProfiles: [], userProfileInit: true}
    case GET_USER_PROFILES_SUCCESS:
      return {...state, userProfiles: action.payload.data, userProfileInit: false}
    case GET_USER_PROFILES_FAILURE:
      return {...state, userProfiles: [], userProfileInit: false}
    // Profile Walls
    case GET_PROFILE_WALL:
      return {...state, isInit: true};
    case GET_PROFILE_WALL_SUCCESS:
      data = action.payload.data;
      next = action.payload.next;
      let profileWall = state.profileWall;
      if (next !== state.nextPage) {
        profileWall = profileWall.concat(data); 
      };
      return {...state, isInit: false, profileWall: profileWall, nextPage: next};
    case GET_PROFILE_WALL_FAILURE:
      return {...state}
      
    default:
      return {...state};
  }
}