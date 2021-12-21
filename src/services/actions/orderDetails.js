import {
    POST_ORDER_REQUEST,
    POST_ORDER_FAILED,
    POST_ORDER_SUCCESS,
    CLEAR_ORDER   
} from './actionTypes';
import url from '../../utils/consts'

export function getOrder(props) {
    return async dispatch => {
        const ingredients = {
            "ingredients": props
        }        

        try {    
            dispatch({
                type: POST_ORDER_REQUEST
            })           
            
            const res = await fetch(url + 'orders',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(ingredients)
                }
            )
            if (!res.ok) {       
                dispatch({
                    type: POST_ORDER_FAILED
                })
            }
            else{
                const data = await res.json();                
                dispatch({
                    type: POST_ORDER_SUCCESS,
                    order: data
                })
            }
        }
        catch (error) {
            dispatch({
                type: POST_ORDER_FAILED
            })      
        }        
    }
}

export function clearOrder() {
    return dispatch => {
        dispatch({
            type: CLEAR_ORDER
        })
    }   
}