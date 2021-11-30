import ProductSmall from "../ProductSmall/ProductSmall";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import { openOrderModal, closeOrderModal } from "../../services/actions/orderDetails";
import { useDrop } from 'react-dnd';
import { ADD_TYPE, ADD_QTY, REMOVE_BUN } from "../../services/actions/actionTypes";
import { useSelector, useDispatch } from 'react-redux';
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

const initialState = {}

const BurgerConstructor = () => {    
    const dispatch = useDispatch(); 

    const onSubmit = () => {       
        dispatch(openOrderModal())        
    }  

    const { data = initialState } = useSelector(store => ({
        data: store.draggableIngridientReducer
    })) 

    // const { products = initialState } = useSelector(store => ({
    //     data: store.draggableIngridientReducer
    // })) 
      
    const board = 'ingridients'
    const el = () => el*2

    const [{ isHover } , dropRef] = useDrop({
        accept: "ingridients",
        collect: monitor => ({
            isHover: monitor.isOver()       
        }), 
        drop(item) {
            if(item.typeIngridient !== 'bun'){
                dispatch({
                type: ADD_QTY,
                ...item,
                board
                });
                dispatch({
                    type: ADD_TYPE,
                    ...item,
                    board
                });
                console.log(item.typeIngridient) 
            }else{                
                if(item.id !== data.ingridients[0].id){
                    console.log('это другая булка!');
                    dispatch({
                        type: REMOVE_BUN,
                        ...item,
                        board
                    })
                    
                }                
            }
        }       
    });

    
    const borderColor = isHover ? "lightgreen" : "transparent";
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        let arrEl = []
        let summ = 0
        arrEl = data.ingridients.map(item => {
            return item.price
        })
        console.log(arrEl)
        summ = arrEl.reduce((sum, current) => {
            return sum + current
        })       
        setTotal(summ)
        console.log(`Это summ - ${summ}`)
    }, [data])
    useEffect(()=>{       
        document.addEventListener("keydown", keyEsc);
        return () => {
            document.removeEventListener("keydown", keyEsc);
        }
    }, [])

    const keyEsc = (e) => {        
        if(e.key === "Escape") {
            dispatch(closeOrderModal())              
        }       
    }

    return(
        <>
        <Modal />     
        <div ref={dropRef} className={" mt-25 ml-10"} onKeyDown={keyEsc}>
            <ProductSmall data = {data.ingridients}/>
            <div className={ styles.price + " mt-10"}>
                <Price count={total} elClass={'text text_type_digits-medium'}/>
                <div className="ml-10">
                    <Button type="primary" size="medium" onClick={onSubmit}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </div>
        
        </>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.array.isRequired
}; 

export default BurgerConstructor;