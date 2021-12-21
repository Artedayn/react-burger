import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    INCREASE_ITEM,
    DECREASE_ITEM
} from './actionTypes';

  
export function addIngredient(data) {
    return dispatch => {
        dispatch({
            type: ADD_INGREDIENT,
            data: data
        })
    }
}

export function deleteIngredientBurger(item) {
    return dispatch => {
        dispatch({
            type: DELETE_INGREDIENT,
            item
        })
    }   
}

export function increaseIngredient() {
    return dispatch => {
        dispatch({
            type: INCREASE_ITEM
        })
    }      
}

export function decreaseIngredient() {
    return dispatch => {
        dispatch({
            type: DECREASE_ITEM
        })
    }      
}