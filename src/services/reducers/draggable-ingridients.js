import { UPDATE_TYPE, ADD_TYPE, REMOVE_BUN, DELETE_INGREDIENT } from "../actions/actionTypes";

const initialState = {
    ingridients: [
        {
            id: "60d3b41abdacab0026a733c6",
            name: "Краторная булка N-200i",
            type: "bun",
            price: 1255,
            thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            qty: 1
        },
    ]
};

export const draggableIngridientReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE: {
            return {
                ...state,                
                // id: action.id,
                // name: action.name,
                // thumbnail: action.thumbnail,
                // price: action.price,                
                ingridients: [...state.ingridients].map(item =>
                    item.id === action.id ? { ...item, qty: ++item.qty } : {item}
                )
            };
        }
        case ADD_TYPE: {
            return {
                ...state,                
                // id: action.id,
                // name: action.name,
                // thumbnail: action.thumbnail,
                // price: action.price,                
                ingridients: [
                    ...state.ingridients,
                    {
                        id: action.id,
                        name: action.name,
                        type: action.typeIngridient,
                        price: action.price,
                        thumbnail: action.thumbnail,
                        qty: 1
                    }
                ]
            };
        }
        case REMOVE_BUN: {
            return {
                ...state,
                ingridients: [...state.ingridients].map(item => 
                    item.type === 'bun' ? {
                        id: action.id,
                        name: action.name,
                        type: action.typeIngridient,
                        price: action.price,
                        thumbnail: action.thumbnail,
                        qty: 1}
                        :
                        item)
            }
        }
        case DELETE_INGREDIENT: {
            return {
              ...state,              
                ingridients: [...state.ingridients].filter((item, 
                    index) => index === action.item ? false : item
                )              
            }
        }   
        // case MOVE_BUN: {

        // }
        default:
            return state;
    }
}