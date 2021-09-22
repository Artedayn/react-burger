import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './Product.module.css'

const Product = (props) => {
   
    return(
        <div onClick={props.onClick} className={styles.box + " ml-4 mr-2 mb-6 mt-10"}>
            { props.counter > 0
            ? <Counter count={props.counter} size="default" className={styles.count}/>
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
    onClick: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,       
    price: PropTypes.number.isRequired,
    counter: PropTypes.number,
    name: PropTypes.string.isRequired
}; 

export default Product;