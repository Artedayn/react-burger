import ProductSmall from "../ProductSmall/ProductSmall";
import OrderDetails from '../OrderDetails/OrderDetails';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import { getOrder, clearOrder } from "../../services/actions/orderDetails";
import { useDrop } from 'react-dnd';
import { ADD_TYPE, ADD_QTY, REMOVE_BUN } from "../../services/actions/actionTypes";
import { useSelector, useDispatch } from 'react-redux';
import Modal from "../Modal/Modal";
import { useMemo } from "react";

const BurgerConstructor = () => {    
    const dispatch = useDispatch(); 

    const { data } = useSelector(store => ({
        data: store.draggableIngridientReducer
    })) 

    const { isOrderSuccess } = useSelector(store => ({
        isOrderSuccess: store.orderDetailsReducer.success
    })) 

    const ingridients = useMemo(() => data.ingridients.map((item) => item.id), [data])

    const onSubmit = () => {       
        dispatch(getOrder(ingridients))        
    }  

    const onClose = () => {       
        dispatch(clearOrder())  
    } 

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
  
    const total = useMemo(()=>{
        let arrEl = []
        let summ = 0
        arrEl = data.ingridients.map(item => {
            return item.price
        })        
        summ = arrEl.reduce((sum, current) => {
            return sum + current
        })
        return summ        
    }, [data])

    return(
        <>
             
        <div ref={dropRef} className={" mt-25 ml-10"}>
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
        { 
            isOrderSuccess && 
            <Modal onClose={onClose}>
                <OrderDetails />
            </Modal>
        }
        </>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.array.isRequired
}; 

export default BurgerConstructor;