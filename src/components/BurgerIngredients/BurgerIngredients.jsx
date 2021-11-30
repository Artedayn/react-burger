import TabElements from "../TabElements/TabElements";
import Product from "../Product/Product";
import styles from './BurgerIngredients.module.css';
import { useMemo, useEffect } from "react";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from 'react-redux';
import { addIngredient, deleteIngredient } from '../../services/actions/modal';
import { elScroll } from "../../services/actions/burgerIngridients";

const initialState = []

const BurgerIngredients = () => {  
    const dispatch = useDispatch(); 

    const onSubmit = (data) => {       
        dispatch(addIngredient(data))        
    }

    const { data = initialState, qty = initialState } = useSelector(store => ({
        data: store.feedReducer.feed.data
    }))  
        
    const calculate = (el) => {         
        if (el.length % 2 > 0){
            return ((el.length / 2) + 0,5) * 244 + 94
        }
        else {
            return (el.length / 2) * 244 + 94
        }
    }
    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);
    const counter = useMemo(() => data.filter((item) => item.id === qty.id ? item.qty = qty.qty : item.qty), [qty])
    
    const paddingBuns = calculate(buns)
    const paddingSauces = calculate(sauces) + paddingBuns

    const handleScroll = event => { 
        const scroll = event.target.scrollTop;
        dispatch(elScroll(scroll, paddingBuns, paddingSauces))        
    }
    
    const keyEsc = (e) => {           
        if(e.key === "Escape") {
            dispatch(deleteIngredient())              
        }        
    }

    useEffect(()=>{       
        document.addEventListener("keydown", keyEsc);
        return () => {
            document.removeEventListener("keydown", keyEsc);
        }        
    }, [])

    return(
        <div>                    
            <Modal/> 
            <div className="mb-5 mt-10" onKeyDown={keyEsc}>
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>
            </div>
            <TabElements />
            <div onScroll={handleScroll} className={ styles.scroll + ' custom-scroll' } > 
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Булки
                    </p>
                </div>                 
                <div className={ styles.box } >
                { buns.map((data, index)=>(                    
                    <Product onClick={() => onSubmit(data)} name={data.name} id={data._id} counter={data.count} image_mobile={data.image_mobile} price={data.price} type={data.type} image={data.image} key={data._id} qty={data.__v}/>                     
                ))}

                </div> 
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>    
                <div className={ styles.box }>
                { sauces.map((data, index)=>(                                  
                    <Product name={data.name} id={data._id} counter={data.count} onClick={() => onSubmit(data)} image_mobile={data.image_mobile} price={data.price} type={data.type} image={data.image} key={data._id} qty={data.__v}/>  
                ))}
                </div>    
                                
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                <div className={ styles.box }>
                { mains.map((data, index)=>(                            
                    <Product name={data.name} id={data._id} counter={data.count} onClick={() => onSubmit(data)} image_mobile={data.image_mobile} price={data.price} type={data.type} image={data.image} key={data._id} qty={data.__v}/>    
                ))}
                </div>            
            </div>
        </div>
    )
}

export default BurgerIngredients;

// const handleClickIngredients = (data) => {
//         setShowModal(true);
//         setDataForModal(data);
//     }

//     <Modal header={"Детали ингредиента"} onClose={handleCloseModal}><IngredientDetails data={dataForModal}/></Modal>

//     return <Ingredient key={item._id} data={item} onClick={() => handleClickIngredients(item)} onClose={handleCloseModal}/>