
import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    
    return (
        <>
            <div className={styles.block} style={{ display: props.modal }} onClick={props.handleCloseModal}>           
            </div>
            
         </>
       
    )
}

ModalOverlay.propTypes = {
    modal: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired
};

export default ModalOverlay