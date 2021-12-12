import { createPortal } from 'react-dom';
import close from '../../images/close.png';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { useEffect } from 'react';
const Modal = ({onClose, children, headerText = ""}) => {   
    const modalRoot = document.getElementById("react-modals");

    useEffect(()=>{       
        document.addEventListener("keydown", keyEsc);
        return () => {
            document.removeEventListener("keydown", keyEsc);
        }
    }, [])

    const keyEsc = (e) => {        
        onClose()
    }

    return createPortal(  
        <>        
        <div className={"pb-30 " + styles.block} >   
            <div>
                <img src={close} onClick={onClose} className={styles.close} alt="закрыть"></img>
            </div>                
            { headerText && (
            <div className={"m-10 pt-3 " + styles.center}>
                <p className="text text_type_main-large">
                    Детали ингридиента
                </p>                
            </div>
            )}
            {children}
        </div>           
        
        <ModalOverlay handleCloseModal={onClose}/> 
       </> 
        ,
        modalRoot
    ); 
}

Modal.propTypes = {
    modal: PropTypes.string   
};

export default Modal