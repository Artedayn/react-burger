import { LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './BottomElement.module.css'

const BottomElement = (props) => {
    return (
        <div className={styles.box + " ml-8 pl-6 pr-8"}>
            <div className="pr-5">
                <img src={props.thumbnail}  alt="нижняя булочка"/>
            </div>
            <div className={styles.item + " pr-5"}>
                <p className="text text_type_main-default">
                    {props.text}.
                </p>
            </div>
            <div className={styles.center + " pr-5"}>
                <Price count={props.price} elClass={'text text_type_main-default'}/>
            </div>
            <div className={styles.center}>
                <LockIcon type="primary" />
            </div>
        </div>
    )
}

BottomElement.propTypes = {
    text: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}; 

export default BottomElement