
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import {feedReducer} from './burgerIngridients';
import {constructionReducer} from './burgerContructionReducer';
import {modalReducer} from './modalReducer'
import {draggableIngridientReducer} from './draggable-ingridients'
import {dropTargetReducer} from './drop-targer'
import thunk from 'redux-thunk';

const composeEnhancers = (window).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
(window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({  
  feedReducer: feedReducer,
  constructionReducer: constructionReducer,
  modalReducer: modalReducer,
  draggableIngridientReducer: draggableIngridientReducer,
  dropTargetReducer: dropTargetReducer
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 
