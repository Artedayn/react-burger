import TabElements from "../TabElements/TabElements";
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import Product from "../Product/Product";
import styles from './BurgerIngredients.module.css';
import { useMemo, useState } from "react";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from 'react-redux';
import { elScroll } from "../../services/actions/burgerIngridients";

const initialState = []

const BurgerIngredients = () => {  
    const dispatch = useDispatch(); 
    const [ingridient, setIngridient] = useState({});
    const [isIngridientsViews, setIsIngridientsViews] = useState(false);

    const onSubmit = (data) => {  
        setIsIngridientsViews(isIngridientsViews === false ? true : false)   
        setIngridient(
            { 
                image_large: data.image_large,
                name: data.name,
                calories: data.calories,
                proteins: data.proteins,
                fat: data.fat,
                carbohydrates: data.carbohydrates
            }
        )          
        console.log(data)
    }

    const onClose = () => {
        setIsIngridientsViews(isIngridientsViews === false ? true : false) 
        setIngridient({})
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

    // const setTab = (tab) => {
    //     setCurrent(tab)
    //     const element = document.getElementById(tab)
    //     if (element) element.scrollIntoView({ behavior: 'smooth'})
    // }

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

    return(
        <div>    
            <div className="mb-5 mt-10" >
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
            {
                isIngridientsViews && (
                    <Modal headerText={true} onClose={onClose}>
                        <IngredientDetails state={ingridient}/>
                    </Modal>
                )
            }
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