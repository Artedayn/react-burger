import {
  GET_INGRIDIENTS_REQUEST,
  GET_INGRIDIENTS_FAILED,
  GET_INGRIDIENTS_SUCCESS,
  BUN_SCROLL,
  MAIN_SCROLL,
  SAUCE_SCROLL,
  DEL_QTY
} from './actionTypes';

import url from '../../utils/consts'

export function getIngridients() {
  return async dispatch => {
    try {    
      dispatch({
        type: GET_INGRIDIENTS_REQUEST
      })
      const res = await fetch(url + 'ingredients')
      if (!res.ok) {       
        dispatch({
          type: GET_INGRIDIENTS_FAILED
        })
      }
      else{
        const data = await res.json();
        dispatch({
          type: GET_INGRIDIENTS_SUCCESS,
          feed: data
        })
      }
    }
    catch (error) {
      dispatch({
          type: GET_INGRIDIENTS_FAILED
      })      
    }        
  }
} 

export function elScroll(scroll, paddingBuns, paddingSauces){
  return dispatch => {
    if(scroll >= paddingBuns && scroll < paddingSauces){
      dispatch({
        type: MAIN_SCROLL
      })    
    }
    else if(scroll >= paddingSauces){
      dispatch({
        type: SAUCE_SCROLL
      })
    }
    else{
      dispatch({
        type: BUN_SCROLL
      })
    }
  }
}

export function delQty(item){ 
  return dispatch => {
    dispatch({
      type: DEL_QTY,
      item: item
    })
  }
}
// export function fetchBurgerIngridients(){
//     const url = 'https://norma.nomoreparties.space/api/ingredients';
//     return async dispatch => {
//       try {
//         //setState({...state, loading: true});
//         const res = await fetch(`${url}`);
//         if (!res.ok) {
//           throw new Error('Ответ сети был не ok.');
//         }
//         const data = await res.json();
//         //setState({ productData: data.data, loading: false });
//       }
//       catch (error) {
//         console.log('Возникла проблема с вашим fetch запросом: ', error)
//       }        
//     }
// }

