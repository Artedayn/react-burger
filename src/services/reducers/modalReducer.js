import {
    ADD_INGREDIENT_MODAL,
    DELETE_INGREDIENT_MODAL,
    ADD_ORDER_MODAL,
    CLOSE_ORDER_MODAL  
} from '../actions/actionTypes';

const initialState = {
    modal: [],
    isOpen: false,
    number: ''
}

export const modalReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_INGREDIENT_MODAL: {
      return {
        ...state,    
        isOpen: true,    
        modal: action.data,
        number: ''
      }
    }
    case DELETE_INGREDIENT_MODAL: {
      return {
        ...state,
        isOpen: false, 
        modal: '',
        number: ''     
      }
    }    
    case ADD_ORDER_MODAL: {
        return {
          ...state,
          isOpen: true, 
          modal: '',
          number: action.number   
        }
      }   
    case CLOSE_ORDER_MODAL: {
        return {
          ...state,
          isOpen: false, 
          modal: '',
          number: ''       
        }
      }   
    default: {
      return state
    }           
  }
}