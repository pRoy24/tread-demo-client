import axios from 'axios';

export const ADD_PIN = 'ADD_PIN';
export const ADD_PIN_SUCCESS = 'ADD_PIN_SUCCESS';
export const ADD_PIN_FAILURE = 'ADD_PIN_FAILURE';
const API_SERVER = process.env.REACT_APP_API_SERVER;

export function addPin(payload) {
    const header = {"userToken": localStorage.getItem("userToken")};

    const request = axios.get(`${API_SERVER}/api/pin`, payload, {'headers': header});
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