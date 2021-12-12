import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './MiddleElement.module.css'
import { useDispatch } from 'react-redux';
import { deleteIngredientBurger } from '../../services/actions/burgerConstruction'
import { delQty } from '../../services/actions/burgerIngridients'
 
const MiddleElement = (props) => {
    const dispatch = useDispatch(); 

    const handleClose = (id) =>{
        dispatch(deleteIngredientBurger(id)) 
        dispatch(delQty(id))
    }
    
    return (        
        <div className={styles.block} >
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
                    <DeleteIcon type="primary" onClick={() => handleClose(props.index)} />
                </div>
            </div> 
        </div>
    )
}

MiddleElement.propTypes = {
    text: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
}; 

export default MiddleElement