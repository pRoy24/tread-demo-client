import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE';

export const AUTHORIZE_CREDENTIALS = 'AUTHORIZE_CREDENTIALS';
export const AUTHORIZE_CREDENTIALS_SUCCESS = 'AUTHORIZE_CREDENTIALS_SUCCESS';
export const AUTHORIZE_CREDENTIALS_FAILURE = 'AUTHORIZE_CREDENTIALS_FAILURE';

const API_SERVER = process.env.REACT_APP_API_SERVER;

export function loginUser() {
    
}

export function loginUserSuccess() {
    
}

export function loginUserFailure() {
    
}

export function authenticateUser() {
    const payload = {"userToken": localStorage.getItem("userToken")};
    const request = axios.post(`${API_SERVER}/auth/verify`, payload);
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

export function authorizeCredentials(code) {
    const request = axios.post(`${API_SERVER}/auth/authorize`, {code: code});
    return {
        type: AUTHORIZE_CREDENTIALS,
        payload: request
    }
}

export function authorizeCredentialsSuccess(response) {
    return {
        type: AUTHORIZE_CREDENTIALS_SUCCESS,
        payload: response
    }
}

export function authorizeCredentialsFailure(error) {
    return {
        type: AUTHORIZE_CREDENTIALS_FAILURE,
        payload: error
    }
}