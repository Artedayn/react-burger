
import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    
    return (
        <>
            <div className={styles.block} onClick={props.handleCloseModal}>           
            </div>
            
         </>       
    )
}

ModalOverlay.propTypes = {
    handleCloseModal: PropTypes.func.isRequired
};

export default ModalOverlay