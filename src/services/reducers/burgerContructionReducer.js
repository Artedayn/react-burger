
import {
    ADD_INGREDIENT,   
    INCREASE_ITEM,
    DECREASE_ITEM
} from '../actions/actionTypes';

const initialState = {
    constructor: []
}

export const constructionReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_INGREDIENT: {
      return {
        ...state,
        constructor: [...state.feedReducer.feed.data].map(item =>
            item.id === action.id ? { ...item, qty: ++item.qty } : item
        )
      }
    }

    case INCREASE_ITEM: {
      return {
        ...state,
        items: [...state.feedReducer.feed.data].map(item =>
          item.id === action.id ? { ...item, qty: ++item.qty } : item
        )
      }
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        items: [...state.feedReducer.feed.data].map(item =>
          item.id === action.id ? { ...item, qty: --item.qty } : item
        )
      }
    }
    default: {
      return state
    }           
  }
}

// export const deleteIngredientBurger = (state = initialState, action) => {
//   switch(action.type){
//     case DELETE_INGREDIENT: {
//       return {
//         ...state,
//         draggableIngridientsReducer:{
//           ...state.draggableIngridientsReducer,
//           ingridients: [...state.draggableIngridientsReducer.ingridients].map(item =>
//           item.id === action.id ? { ...item, qty: --item.qty } : item
//         )
//         }
        
//       }
//   }   
//   }
// }