import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT
} from './actionTypes';

  
export function addIngredient(data) {
    return {
        type: ADD_INGREDIENT,
        payload: data
    }
}

export function deleteIngredientBurger(item) {
    return{
        type: DELETE_INGREDIENT,
        payload: item
    }   
}

export function moveIngredients(item) {
    return{
        type: MOVE_INGREDIENT,
        payload: item
    } 
}
