import TabElements from "../TabElements/TabElements";
import Product from "../Product/Product";
import styles from './BurgerIngredients.module.css';
import { useMemo } from "react";

const BurgerIngredients = (props) => {   
    const data = props.data;
    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);

   
    return(
        <div>            
            <div className="mb-5 mt-10">
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>
            </div>
            <TabElements />
            <div className={ styles.scroll + ' custom-scroll' } > 
            <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Булки
                    </p>
                </div>                 
                <div className={ styles.box }>
                { buns.map((state, index)=>(                                  
                    <Product name={state.name} counter={state.count} price={state.price} image={state.image} key={index}/> 
                ))}

                </div> 
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>    
                <div className={ styles.box }>
                { sauces.map((state, index)=>(                                  
                    <Product name={state.name} counter={state.count} price={state.price} image={state.image} key={index}/>  
                ))}
                </div>    
                                
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                <div className={ styles.box }>
                { mains.map((state, index)=>(                            
                    <Product name={state.name} counter={state.count} price={state.price} image={state.image} key={index}/>    
                ))}
                </div>            
            </div>
        </div>
    )
}

export default BurgerIngredients;