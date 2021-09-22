import TabElements from "./TabElements";
import Product from "./Product";

const BurgerIngredients = (props) => {    
    return(
        <div>            
            <div className="mb-5 mt-10">
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>
            </div>
            <TabElements />
            <div className='custom-scroll' style={{overflowY: 'auto', height: 720}}> 
            <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Булки
                    </p>
                </div> 
                
                <div style={{display: 'flex', flexWrap: 'wrap', width: 600}}>
                { props.data.map((state, index)=>( 
                    <>
                    { state.type === "bun"
                    ?                
                        <Product name={state.name} counter={state.count} price={state.price} image={state.image}/>              
                    :
                        null
                    }
                    </>
                ))}

                </div> 
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>    
                <div style={{display: 'flex', flexWrap: 'wrap', width: 600}}>
                { props.data.map((state, index)=>( 
                    <>
                    { state.type === "main"
                    ?                
                        <Product name={state.name} counter={state.count} price={state.price} image={state.image}/>              
                    :
                        null
                    }
                    </>
                ))}

                </div>    
                                
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', width: 600}}>
                { props.data.map((state, index)=>( 
                    <>
                { state.type === "main"
                ?                
                    <Product name={state.name} counter={state.count} price={state.price} image={state.image}/>              
                :
                    null
                }
                    </>
                ))}
                </div>            
            </div>
        </div>
    )
}
export default BurgerIngredients;