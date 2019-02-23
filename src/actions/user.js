import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE';
const API_SERVER = process.env.REACT_APP_API_SERVER;

export function loginUser() {
    
}

export function loginUserSuccess() {
    
}

export function loginUserFailure() {
    
}

export function authenticateUser() {
    const payload = {"token": localStorage.getItem("user_token")};
    const request = axios.get(`${API_SERVER}`)
    return {
        type: AUTHENTICATE_USER,
        payload: request
    }
}

export function authenticateUserSuccess(response) {
    return {
        type: AUTHENTICATE_USER_SUCCESS,
        payload: response
    }
}

export function authenticateUserFailure(error) {
    return {
        type: AUTHENTICATE_USER_FAILURE,
        payload: error
    }
}
