import { LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './BottomElement.module.css';

const BottomElement = (props) => {
    const elem = props.id !== false 
    ?   <>
            <div className="pr-5">
                <img src={props.thumbnail} alt="нижняя булочка"/>
            </div>
            <div className={ styles.name + " pr-5"}>
                <p className="text text_type_main-default">
                    {props.text}.
                </p>
            </div>
            <div className={ styles.icon + " pr-5"}>
                <Price count={props.price/2} elClass={'text text_type_main-default'}/>
            </div>
            <div className={ styles.icon }>
                <LockIcon type="primary" />
            </div>
        </>
    : <div className={styles.non_item}></div>
    return ( 
        <div className={styles.item + " ml-8 pl-6 pr-8"}>{elem}</div>       
        
    )
}

BottomElement.propTypes = {
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

export default BottomElement