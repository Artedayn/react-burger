import { createPortal } from 'react-dom';
import { useEffect } from "react";
import close from '../../images/close.png';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Modal = (props) => {   
    const modalRoot = document.getElementById("react-modals");

    const keyEsc = (e) => {           
        if(e.key === "Escape") {
            props.openModal(props.modal === "block" ? "none" : 'none');            
        }        
    }

    useEffect(()=>{       
        document.addEventListener("keydown", keyEsc);
        return () => {
            document.removeEventListener("keydown", keyEsc);
        }
    }, [])
    
    return createPortal(  
        <>        
        { (props.modal === 'block')
        ?
           <div className={"pb-30 " + styles.block} onKeyDown={keyEsc}>   
                <div>
                    <img src={close} onClick={props.handleCloseModal} className={styles.close} alt="закрыть"></img>
                </div>
                <div className={"m-10 pt-3 " + styles.center}>
                    <p className="text text_type_main-large">
                        {props.detail}
                    </p>                
                </div> 
                {props.children}   
            </div>
        :        
            null
        }
        <ModalOverlay modal={props.modal} state={props.state} handleCloseModal={props.handleCloseModal}/> 
       </> 
        ,
        modalRoot
    ); 
}

Modal.propTypes = {
    modal: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    detail: PropTypes.string,
    children: PropTypes.element.isRequired,
    state: PropTypes.any
};

export default Modal