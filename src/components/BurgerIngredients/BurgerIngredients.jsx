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
    const dispatch = useDispatch()
    const [ingridient, setIngridient] = useState({})
    const [isIngridientsViews, setIsIngridientsViews] = useState(false) 
    
    // Создаём счётчик, где ingredientsCounters[data._id] указывает кол-во элементов
    const ingredientsCounters = useSelector((store) => {
        const ingridients  = store.constructionReducer.ingridients        
        const counters = {}
        ingridients.forEach((ingridient) => {           
            if (!counters[ingridient.id]){
                counters[ingridient.id] = 1               
            }
            else{
                counters[ingridient.id]++
            }            
        })        
        return counters
    })
    

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
    }

    const onClose = () => {
        setIsIngridientsViews(isIngridientsViews === false ? true : false) 
        setIngridient({})
    }

    const { data = initialState } = useSelector(store => ({
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
    //     console.log(element)
    // }

    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);
    
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
                <div className="mb-6 mt-10" >
                    <p className="text text_type_main-medium" id="bun">
                        Булки
                    </p>
                </div>                 
                <div className={ styles.box } >
                { buns.map((data, index)=>(                    
                    <Product onClick={() => onSubmit(data)} name={data.name} id={data._id} image_mobile={data.image_mobile} price={data.price} type={data.type} image={data.image} key={data._id} qty={ingredientsCounters[data._id]*2} />                     
                ))}

                </div> 
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium" id="sauce">
                        Соусы
                    </p>
                </div>    
                <div className={ styles.box }>
                { sauces.map((data, index)=>(                                  
                    <Product name={data.name} id={data._id} onClick={() => onSubmit(data)} image_mobile={data.image_mobile} price={data.price} type={data.type} image={data.image} key={data._id} qty={ingredientsCounters[data._id]} />  
                ))}
                </div>    
                                
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium" id="main">
                        Начинки
                    </p>
                </div>
                <div className={ styles.box }>
                { mains.map((data, index)=>(                            
                    <Product name={data.name} id={data._id} onClick={() => onSubmit(data)} image_mobile={data.image_mobile} price={data.price} type={data.type} image={data.image} key={data._id} qty={ingredientsCounters[data._id]} />    
                ))}
                </div>            
            </div>
            {
                isIngridientsViews && (
                    <Modal headerText={"Детали ингридиента"} onClose={onClose}>
                        <IngredientDetails state={ingridient}/>
                    </Modal>
                )
            }
        </div>
    )
}

export default BurgerIngredients;
