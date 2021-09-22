import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Price.module.css';
import PropTypes from 'prop-types';

const Price = (props) => {
    return (
        <div className={styles.center}>
            <p className={props.elClass + ' pr-2'}>{props.count}</p>
            <CurrencyIcon type="primary" className={props.elClass} />
        </div>
    )
}

Price.propTypes = {
    count: PropTypes.number
}; 

export default Price;