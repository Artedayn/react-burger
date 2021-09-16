import ProductSmall from "../ProductSmall/ProductSmall";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';

const BurgerConstructor = (props) => {    
    return(
        <>
        <div className="mt-25 ml-10">
            <ProductSmall data={props.data}/>
            <div className={ styles.price + " mt-10"}>
                <Price count={620} elClass={'text text_type_digits-medium'}/>
                <div className="ml-10">
                    <Button type="primary" size="medium">
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