
import {
  GET_FEED,
  GET_FEED_FAILED,
  GET_FEED_SUCCESS,
  BUN_SCROLL,
  MAIN_SCROLL,
  SAUCE_SCROLL,
  ADD_QTY
} from '../actions/actionTypes';

const initialState = {
  feedRequest: false,
  feedFailed: false,
  scroll: 'one',
  feed: []
}

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED: {
      return {
        ...state,
        // Запрос начал выполняться
        feedRequest: true,
        // Сбрасываем статус наличия ошибок от предыдущего запроса 
        // на случай, если он был и завершился с ошибкой
        feedFailed: false,
      };
    }
    case GET_FEED_SUCCESS: {
      return { 
        ...state, 
        // Запрос выполнился успешно, помещаем полученные данные в хранилище
        feed: action.feed,
        // Запрос закончил своё выполнение
        feedRequest: false 
      };
    }
    case GET_FEED_FAILED: {
      return { 
        ...state, 
        // Запрос выполнился с ошибкой, 
        // выставляем соответсвующие значения в хранилище
        feedFailed: true, 
        // Запрос закончил своё выполнение
        feedRequest: false 
      };
    }
    case BUN_SCROLL: {
      return {
        ...state,
        scroll: 'one'
      }
    }
    case MAIN_SCROLL: {
      return {
        ...state,
        scroll: 'two'
      }
    }
    case SAUCE_SCROLL: {
      return {
        ...state,
        scroll: 'three'
      }
    }
    case ADD_QTY: {
      return {
        ...state,
        feed: {
          ...state.feed,
          data: 
            // ...state.feed.data,
            state.feed.data.map((el) => action.id === el._id ? { ...el, __v: el.__v + 1 } : {...el})            
          
        }      
      }
  }
  // [...state.ingridients].map(item =>
  //   item.id === action.id ? { ...item, qty: ++item.qty } : {item}
    default: {
      return state
    }
  }
} 