import {
    ADD_ORDER_MODAL,
    CLOSE_ORDER_MODAL   
} from './actionTypes';

export function openOrderModal() {
    return dispatch => {
        dispatch({
            type: ADD_ORDER_MODAL,
            number: Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
        })
    }   
}

export function closeOrderModal() {
    return dispatch => {
        dispatch({
            type: CLOSE_ORDER_MODAL
        })
    }   
}