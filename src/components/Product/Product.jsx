import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './Product.module.css'
import { useDrag } from "react-dnd";

const Product = (props) => {       
    const [, dragRef] = useDrag({
        type: "ingridients",    
        item: {
            id: props.id,
            name: props.name,
            thumbnail: props.image_mobile,
            type: props.type,
            price: props.price,
            qty: props.qty,
            act: "drop"
        },  
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    return(    
        <div ref={dragRef} onClick={props.onClick} className={styles.box + " ml-4 mr-2 mb-6 mt-10"} >
            { props.qty > 0
            ? <Counter count={props.qty} size="default" className={styles.count}/>
            : null }            
            <div className="pl-4 pr-4 pb-1">
                <img src={props.image} alt="сочная новинка"></img>               
            </div> 
            <div className={styles.center + " pb-1"}>
                <Price count={props.price} elClass={'text text_type_main-default'}/>
            </div>
            <p className={styles.center__text + " text text_type_main-default"}>
                {props.name}
            </p>
        </div>
    )
}

Product.propTypes = {
    image: PropTypes.string.isRequired,       
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    qty: PropTypes.number,
    counter: PropTypes.number,
}; 

export default Product;