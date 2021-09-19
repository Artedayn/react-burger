import Modal from "../Modal/Modal";
import { createPortal } from 'react-dom';
import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    const modalRoot = document.getElementById("react-modals");
    return createPortal(
        <>
            <div onClick={props.handleCloseModal} onKeyDown={props.keyEsc} className={styles.block} style={{ display: props.modal }}>           
            </div>
            <Modal            
            handleCloseModal={props.handleCloseModal}            
            modal={props.modal} 
            state={props.state} 
            modalType = {props.state !== '' ? 'ingredients' : 'null' } />    
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