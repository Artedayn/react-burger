
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import {feedReducer} from './burgerIngridients';
import {constructionReducer} from './constructionReducer'
import {orderDetailsReducer} from './orderDetailsReducer'
import thunk from 'redux-thunk';

const composeEnhancers = (window).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
(window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({  
  feedReducer: feedReducer,
  constructionReducer: constructionReducer,
  orderDetailsReducer: orderDetailsReducer
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 
