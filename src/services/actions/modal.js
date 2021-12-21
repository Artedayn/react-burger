import {
    ADD_INGREDIENT_MODAL,
    DELETE_INGREDIENT_MODAL     
} from './actionTypes';
  
export function addIngredient(data) {
    return dispatch => {
        dispatch({
            type: ADD_INGREDIENT_MODAL,
            data: data
        })
    }
}

export function deleteIngredient() {
    return dispatch => {
        dispatch({
            type: DELETE_INGREDIENT_MODAL
        })
    }   
}

