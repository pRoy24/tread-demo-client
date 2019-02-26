import {GET_USER_WALL, GET_USER_WALL_SUCCESS, GET_USER_WALL_FAILURE, GET_USER_PROFILES,
  GET_USER_PROFILES_SUCCESS, GET_USER_PROFILES_FAILURE, GET_PROFILE_WALL, GET_PROFILE_WALL_SUCCESS,
  GET_PROFILE_WALL_FAILURE, ADD_PIN, ADD_PIN_SUCCESS, ADD_PIN_FAILURE, RESET_PROFILE_WALL,
  DELETE_PIN, DELETE_PIN_SUCCESS, DELETE_PIN_FAILURE, GET_LINK_URL, GET_LINK_URL_SUCCESS, GET_LINK_URL_FAILURE,
  RESET_LINK_URL
} from '../actions/board';

const initialState = { userWall: [], userProfiles: [], isInit: true, userProfileInit: true, nextPage: 1, profileWall: [],
  linkUrl: {}
};

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
    case RESET_PROFILE_WALL:
      return {...state, profileWall: [], nextPage: 1}
    case ADD_PIN:
      return {...state}
    case ADD_PIN_SUCCESS:
      const {pin} = action.payload;
      currentWall = state.userWall;
      currentWall.unshift(pin);
      return {...state, userWall: currentWall}
    case ADD_PIN_FAILURE:
      return {...state}
    case DELETE_PIN:
      return {...state}
    case DELETE_PIN_SUCCESS:
      let pinId = action.payload.id;
      currentWall = state.userWall;
      let pinIdx = currentWall.findIndex((a)=>(a._id.toString() === pinId));
      currentWall.splice(pinIdx, 1);
      return {...state, userWall: currentWall}
    case DELETE_PIN_FAILURE:
      return {...state}
    case GET_LINK_URL:
      return {...state, linkUrl: {}}
    case GET_LINK_URL_SUCCESS:
      return {...state, linkUrl: action.payload.data}
    case GET_LINK_URL_FAILURE:
      return {...state, linkUrl: {}}
    case RESET_LINK_URL:
      return {...state, linkUrl: {}}
    default:
      return {...state};
  }
}