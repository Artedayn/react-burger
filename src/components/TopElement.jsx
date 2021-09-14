import { LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import topImage from '../images/ingredient_t.png';
import Price from './Price';
import PropTypes from 'prop-types';

const TopElement = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundImage:`url(${topImage})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }} className="ml-8 pl-6 pr-8 ">
            <div className="pr-5">
                <img src={props.thumbnail}  alt="верхяя булочка"/>
            </div>
            <div style={{display: 'flex', alignItems: 'center', width: 254}} className="pr-5">
                <p className="text text_type_main-default">
                    {props.text}.
                </p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}} className="pr-5">
                <Price count={props.price} elClass={'text text_type_main-default'}/>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <LockIcon type="primary" />
            </div>
        </div>
    )
}

TopElement.propTypes = {
    text: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
}; 

export default TopElement