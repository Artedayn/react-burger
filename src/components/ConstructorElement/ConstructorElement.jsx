import BottomElement from '../BottomElement/BottomElement';
import MiddleElement from '../MiddleElement/MiddleElement';
import TopElement from '../TopElement/TopElement';
import styles from './ConstructorElement.module.css';
import PropTypes from 'prop-types';

const ConstructorElement = (props) => {
    return(
        
        <div className={styles.container}>
        { props.type === 'bun' && props.position === "top"
        ? 
            <TopElement {...props}/>
        : props.type === 'bun' && props.position === "bottom"
        ?
            <BottomElement {...props}/>
        :
            <MiddleElement {...props} />
        }
        </div>
    )
}

ConstructorElement.propTypes = {
    type: PropTypes.string,
    position: PropTypes.string,
    isLocked: PropTypes.bool,
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}; 

export default ConstructorElement 