import {    
    ADD_ORDER_MODAL,
    CLOSE_ORDER_MODAL  
} from '../actions/actionTypes';

const initialState = {    
    isOpen: false,
    number: ''
}

export const orderDtailsReducer = (state = initialState, action) => {
    switch(action.type){      
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