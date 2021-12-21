
import { REMOVE_BUN, DELETE_INGREDIENT, ADD_INGREDIENT, MOVE_INGREDIENT } from "../actions/actionTypes";

const initialState = {
    ingridients: [
        {        
            id: false,
            name: "",
            type: "bun",
            price: 0,
            thumbnail: "",
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
                        id: action.payload.id,
                        name: action.payload.name,
                        type: action.payload.type,
                        price: action.payload.price*2,
                        thumbnail: action.payload.thumbnail,
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
