import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT
} from './actionTypes';

  
export function addIngredient(data) {
    return {
        type: ADD_INGREDIENT,
        data: data
    }
}

export function deleteIngredientBurger(item) {
    return{
        type: DELETE_INGREDIENT,
        item
    }   
}
