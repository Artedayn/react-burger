import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from './Price';
import PropTypes from 'prop-types';

const Product = (props) => {
    return(
        <div style={{ width: 272, position: 'relative' }} className="ml-4 mr-2 mb-6 mt-10">
            { props.counter > 0
            ? <Counter count={props.counter} size="default" style={{position: 'absolute', top: 0, right: 0}}/>
            : null }
            <div className="pl-4 pr-4 pb-1">
                <img src={props.image} alt="сочная новинка"></img>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}} className="pb-1">
                <Price count={props.price} elClass={'text text_type_main-default'}/>
            </div>
            <p style={{textAlign: 'center'}} className="text text_type_main-default">
                {props.name}
            </p>
        </div>
    )
}

Product.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    counter: PropTypes.number,
}; 

export default Product;