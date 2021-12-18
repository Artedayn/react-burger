import ProductSmall from "../ProductSmall/ProductSmall";
import OrderDetails from '../OrderDetails/OrderDetails';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import styles from './BurgerConstructor.module.css';
import { getOrder, clearOrder } from "../../services/actions/orderDetails";
import { useDrop } from 'react-dnd';
import { REMOVE_BUN, ADD_INGREDIENT } from "../../services/actions/actionTypes";
import { useSelector, useDispatch } from 'react-redux';
import Modal from "../Modal/Modal";
import { useMemo } from "react";
import { v4 as uuidv4 } from 'uuid';

const BurgerConstructor = () => {    
    const dispatch = useDispatch(); 

    // Обращаемся к стору
    const { data } = useSelector(store => ({
        data: store.constructionReducer
    })) 

    // Флаг на отправку данных заказа
    const { isOrderSuccess } = useSelector(store => ({
        isOrderSuccess: store.orderDetailsReducer.success
    })) 

    // Массив ID ингридиентов
    const ingridientsId = useMemo(() => data.ingridients.map((item) => item.id), [data])

    // Отправка массива ID, получение номера заказа
    const onSubmit = () => {       
        dispatch(getOrder(ingridientsId))        
    }  

    // Ф-ция закрытия и очистки данных заказа
    const onClose = () => {       
        dispatch(clearOrder())  
    } 

    const board = 'ingridients'

    // DND - определяем тип перетаскиваемого элемента, отправляем в burger Ingridients
    const [ , dropRef] = useDrop({
        accept: "ingridients",
        collect: monitor => ({
            handlerId: monitor.getHandlerId(), 
        }), 
        drop(item) {
            if(item.act === "drop"){
                if(item.type !== 'bun'){
                    dispatch({
                        type: ADD_INGREDIENT,
                        payload: { ...item, constructorId: uuidv4()},
                        board
                    }); 
                }else{           
                    if(item.id !== data.ingridients[0].id){ 
                        dispatch({
                            type: REMOVE_BUN,
                            payload: item,
                            board
                        })
                    }                
                }
            }            
        }       
    });
    
    // Счётчик стоимости товаров
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
            <ProductSmall data = {data.ingridients} />
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

export default BurgerConstructor;