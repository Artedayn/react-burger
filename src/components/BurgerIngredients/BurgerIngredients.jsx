import TabElements from "../TabElements/TabElements";
import Product from "../Product/Product";
import styles from './BurgerIngredients.module.css';
import { useMemo, useEffect } from "react";
import React from "react";
import Modal from "../Modal/Modal";

const BurgerIngredients = (props) => {   
    const data = props.data;
    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);

    const [modal, openModal] = React.useState("none");
    const [state, setDataForModal] = React.useState("");    

    useEffect(()=>{       
        document.addEventListener("keydown", keyEsc);
        return () => {
            document.removeEventListener("keydown", keyEsc);
        }
    }, [])

    const keyEsc = (e) => {        
        if(e.key === "Escape") {
            openModal(modal === "block" ? "block" : 'none');
        }        
    }

    const handleOpenModal = () => {
        openModal(modal === "none" ? "block" : "none");        
    };

    const handleClickIngredients = (data) => {       
        setDataForModal(data);
        handleOpenModal();        
    }
    
    const handleCloseModal = (e) => {
        openModal(modal === "none" ? "block" : "none");       
    };
       
    return(
        <div>                    
            <Modal            
            handleCloseModal={handleCloseModal} 
            modal={modal}
            state={state} 
            modalType = {props.data !== '' ? 'ingredients' : 'null' }
            keyEsc = {keyEsc} /> 
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
                <div className={ styles.box } >
                { buns.map((data, index)=>(
                    <Product onClick={() => handleClickIngredients(data)} name={data.name} counter={data.count} price={data.price} image={data.image} key={data._id}/> 
                ))}

                </div> 
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>    
                <div className={ styles.box }>
                { sauces.map((data, index)=>(                                  
                    <Product name={data.name} counter={data.count} onClick={() => handleClickIngredients(data)} price={data.price} image={data.image} key={data._id}/>  
                ))}
                </div>    
                                
                <div className="mb-6 mt-10">
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                <div className={ styles.box }>
                { mains.map((data, index)=>(                            
                    <Product name={data.name} counter={data.count} onClick={() => handleClickIngredients(data)} price={data.price} image={data.image} key={data._id}/>    
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