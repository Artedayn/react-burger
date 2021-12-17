import state from "../../utils/data";
import { REMOVE_BUN, DELETE_INGREDIENT, ADD_INGREDIENT, MOVE_INGREDIENT } from "../actions/actionTypes";

const initialState = {
    ingridients: [
        {        
            id: "60d3b41abdacab0026a733c6",
            name: "Краторная булка N-200i",
            type: "bun",
            price: 1255,
            thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            qty: 1,
            constructorId: 1
        },

    ]      
};

export const constructionReducer = (state = initialState, action) => {    
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {
                ...state, 
                ingridients: [ ...state.ingridients, action.payload ]
            }                     
            // action.payload.type === "bun" ? { ...state, bun: action.payload } : { ...state, ingridients: [ ...state.ingridients, action.payload ]}            
        }

        case REMOVE_BUN: {
            return {
                ...state,
                ingridients: state.ingridients.map(item => 
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
                ingridients: state.ingridients.filter((item) => {                    
                    return item.constructorId !== action.payload.constructorId 
                })              
            }
        }   
        
        case MOVE_INGREDIENT: {
            const fromIndex = action.payload.from            
            
            const toIndex = action.payload.to

            const el = () => {
                console.log('нашли ' + ' ' + toIndex + ' ' + fromIndex )
                console.log(`Отправляем из ${action.payload.from} в ${action.payload.to}`)
            }
            el()

            const ingridients = [...state.ingridients]  
            if (toIndex === -1 || fromIndex === -1) return state
            // for(let i = 0; i < ingridients.length; i++){
            //     if(ingridients[i] === toIndex){
            //         ingridients[i] = ingridients[fromIndex]
            //     }
            //     if(i === ingridients.lenght - 1){
            //         ingridients.splice(fromIndex, 1)
            //     }
            //     return ingridients
            // }
                      
            ingridients.splice(toIndex + 1, 0, ingridients.splice(fromIndex + 1, 1)[0])
            
            return {
                ...state,
                ingridients,
            }
        }   

        default:
            return state;
    }
}
