import {    
    POST_ORDER_REQUEST,
    POST_ORDER_FAILED,
    POST_ORDER_SUCCESS,
    CLEAR_ORDER
} from '../actions/actionTypes';

const initialState = {    
    success: false,
    name: '',
    order: { number: null }
}

export const orderDetailsReducer = (state = initialState, action) => {
    switch(action.type){      
      // case ADD_ORDER_MODAL: {
      //     return {
      //       ...state,
      //       isOpen: true, 
      //       modal: '',
      //       number: action.number   
      //     }
      //   }   
      // case CLOSE_ORDER_MODAL: {
      //     return {
      //       ...state,
      //       isOpen: false, 
      //       modal: '',
      //       number: ''       
      //     }
      //   }   
      case POST_ORDER_REQUEST: {
        return {
          ...state,
          success: '',
          name: '',
          order: { number: null }  
        }
      }  
      case POST_ORDER_FAILED: {
        return {
          ...state,
          success: false,
          name: '',
          order: { number: null }   
        }
      }  
      case POST_ORDER_SUCCESS: {
        return {
          ...state,
          success: action.order.success,
          name: action.order.name,
          order: action.order.order
        }
      }  
      case CLEAR_ORDER: {
        return {
          ...state,
          success: '',
          name: '',
          order: { number: null }
        }
      } 
      default: {
        return state
      }           
    }
  }