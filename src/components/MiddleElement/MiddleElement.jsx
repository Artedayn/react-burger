import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './MiddleElement.module.css'
import { useDispatch } from 'react-redux';
import { deleteIngredientBurger } from '../../services/actions/burgerConstruction'
import { delQty } from '../../services/actions/burgerIngridients'
import { useDrag, useDrop } from 'react-dnd';
import { MOVE_INGREDIENT } from '../../services/actions/actionTypes';
 
const MiddleElement = (props) => {
    const dispatch = useDispatch(); 

    const handleClose = (id) =>{
        dispatch(deleteIngredientBurger(id)) 
        dispatch(delQty(id))
    }

     //DRAG для перетаскивания
     const [, dragRef] = useDrag({
        type: "ingridients",    
        item: {...props, act: "move"},               
        collect: monitor => ({
            isDragging: monitor.isDragging()            
        })
    });
    const [, dropRef] = useDrop({
        accept: "ingridients",
        collect: monitor => ({
            handlerId: monitor.getHandlerId(), 
        }), 
        drop(item) {                       
            if(item.act === "move"){
                dispatch({
                    type: MOVE_INGREDIENT,
                    payload: { ...item, from: item.index, to: props.index}
                })                 
            }                  
        }       
    });
    
    return (       
        <div ref={dragRef}>
            <div className={styles.block} ref={dropRef} data-handler-id={props.handlerId}>
                <div className={ styles.center + " pr-2"}>                
                    <DragIcon type="primary" />
                </div> 
                <div className={styles.item + " pl-6 pr-8"} >         
                    <div className="pr-5" >
                        <img src={props.thumbnail}  alt="ингредиент"/>
                    </div>
                    <div className={styles.center + " pr-5"}>
                        <p className={styles.min + " text text_type_main-default"} >
                            {props.text}.
                        </p>
                    </div>
                    <div className={styles.center + " pr-5"}>
                        <Price count={props.price} elClass={'text text_type_main-default'}/>
                    </div>
                    <div className={styles.center}>
                        <DeleteIcon type="primary" onClick={() => handleClose(props)} />
                    </div>
                </div> 
            </div>
        </div> 
    )
}

MiddleElement.propTypes = {
    text: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string,
    position: PropTypes.string,
    isLocked: PropTypes.bool,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}; 

export default MiddleElement