
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import {feedReducer} from './burgerIngridients';
import {draggableIngridientReducer} from './draggable-ingridients'
import {dropTargetReducer} from './drop-targer'
import {orderDetailsReducer} from './orderDetailsReducer'
import thunk from 'redux-thunk';

const composeEnhancers = (window).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
(window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({  
  feedReducer: feedReducer,
  draggableIngridientReducer: draggableIngridientReducer,
  dropTargetReducer: dropTargetReducer,
  orderDetailsReducer: orderDetailsReducer
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 
