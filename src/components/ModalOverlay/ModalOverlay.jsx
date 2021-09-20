import { createPortal } from 'react-dom';
import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    const modalRoot = document.getElementById("react-modals");
    return createPortal(
        <>
            <div onKeyDown={props.keyEsc} className={styles.block} style={{ display: props.modal }}>           
            </div>
            
         </>
        ,
        modalRoot
    )
}

ModalOverlay.propTypes = {
    modal: PropTypes.string,
    modalType: PropTypes.string,
};

export default ModalOverlay