import {
  GET_FEED,
  GET_FEED_FAILED,
  GET_FEED_SUCCESS,
  BUN_SCROLL,
  MAIN_SCROLL,
  SAUCE_SCROLL,
  ADD_QTY
} from './actionTypes';

// Наш первый thunk
export function getFeed() {
  // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
  return async dispatch => {
    try {
      //setState({...state, loading: true});
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
      dispatch({
        type: GET_FEED
      })
      if (!res.ok) {
        //throw new Error('Ответ сети был не ok.');
        dispatch({
          type: GET_FEED_FAILED
        })
      }
      const data = await res.json();
      dispatch({
        type: GET_FEED_SUCCESS,
        feed: data
      })

      //setState({ productData: data.data, loading: false });
    }
    catch (error) {
      dispatch({
          type: GET_FEED_FAILED
      })
      //console.log('Возникла проблема с вашим fetch запросом: ', error)
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

export function addQty(item){ 
  return dispatch => {
    dispatch({
      type: ADD_QTY,
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

