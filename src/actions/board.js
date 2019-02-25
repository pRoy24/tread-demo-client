import axios from 'axios';

export const ADD_PIN = 'ADD_PIN';
export const ADD_PIN_SUCCESS = 'ADD_PIN_SUCCESS';
export const ADD_PIN_FAILURE = 'ADD_PIN_FAILURE';


export const GET_USER_WALL = 'GET_USER_WALL';
export const GET_USER_WALL_SUCCESS = 'GET_USER_WALL_SUCCESS';
export const GET_USER_WALL_FAILURE = 'GET_USER_WALL_FAILURE';

export const GET_USER_PROFILES = 'GET_USER_PROFILES';
export const GET_USER_PROFILES_SUCCESS = 'GET_USER_PROFILES_SUCCESS';
export const GET_USER_PROFILES_FAILURE = 'GET_USER_PROFILES_FAILURE';

export const GET_PROFILE_WALL = 'GET_PROFILE_WALL';
export const GET_PROFILE_WALL_SUCCESS = 'GET_PROFILE_WALL_SUCCESS';
export const GET_PROFILE_WALL_FAILURE = 'GET_PROFILE_WALL_FAILURE';

const API_SERVER = process.env.REACT_APP_API_SERVER;

export function addPin(payload) {
    const header = {"userToken": localStorage.getItem("userToken")};
    const request = axios.post(`${API_SERVER}/api/pin`, payload, {'headers': header});
    return {
        type: ADD_PIN,
        payload: request
    }
}

export function addPinSuccess(success) {
    return {
        type: ADD_PIN_SUCCESS,
        payload: success
    }
}

export function addPinFailure(error) {
    return {
        type: ADD_PIN_FAILURE,
        payload: error
    }
}

export function getUserWall(page) {
    const header = {"userToken": localStorage.getItem("userToken")};    
    const request = axios.get(`${API_SERVER}/api/wall?page=${page}`, {'headers': header});
    return {
        type: GET_USER_WALL,
        payload: request
    }    
}

export function getUserWallSuccess(response) {
    console.log(response);
    return {
        type: GET_USER_WALL_SUCCESS,
        payload: response
    }
}

export function getUserWallFailure(error) {
    return {
        type: GET_USER_WALL_FAILURE,
        payload: error
    }
}

export function getUserProfiles() {
    const header = {"userToken": localStorage.getItem("userToken")};
    const request = axios.get(`${API_SERVER}/api/profiles`, {'headers': header});
    return {
        type: GET_USER_PROFILES,
        payload: request
    }
}

export function getUserProfilesSuccess(response) {
    return {
        type: GET_USER_PROFILES_SUCCESS,
        payload: response
    }
}

export function getUserProfilesFailure(error) {
    return {
        type: GET_USER_PROFILES_FAILURE,
        payload: error
    }
}

export function getProfileWall(userName, page) {
    const request = axios.get(`${API_SERVER}/api/profile_wall?username=${userName}&page=${page}`);
    return {
        type: GET_PROFILE_WALL,
        payload: request
    }
}

export function getProfileWallSuccess(response) {
    return {
        type: GET_PROFILE_WALL_SUCCESS,
        payload: response
    }
}

export function getProfileWallFailure(error) {
    return {
        type: GET_PROFILE_WALL_FAILURE,
        payload: error
    }
}