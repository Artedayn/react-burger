import { createPortal } from 'react-dom';
import close from '../../images/close.png';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { deleteIngredient } from '../../services/actions/modal';
import { useSelector, useDispatch } from 'react-redux';
const Modal = () => {   
    const dispatch = useDispatch(); 
    const modalRoot = document.getElementById("react-modals");

    const { state, isOpen } = useSelector(store => ({
        state: store.modalReducer.modal,
        isOpen: store.modalReducer.isOpen
    })) 
    const modalType = state !== '' ? 'ingredients' : 'null'
    const modalOpen = isOpen ? 'block' : 'none'
    
    const onDelete = (id) => {        
        dispatch(deleteIngredient(id))
    }
    
    return createPortal(  
        <>
        { (modalOpen === 'block')
        ?
           <div className={"pb-30 " + styles.block} >   
                <div>
                    <img src={close} onClick={onDelete} className={styles.close} alt="закрыть"></img>
                </div>
                { modalType === 'ingredients'
                ?
                <>
                <div className={"m-10 pt-3 " + styles.center}>
                    <p className="text text_type_main-large">
                        Детали ингридиента
                    </p>                
                </div>
                <IngredientDetails state={state}/>
                </>
                :
                <OrderDetails />
                }
            </div>
            
        :        
            null
        }
        <ModalOverlay modal={modalOpen} handleCloseModal={onDelete}/> 
       </> 
        ,
        modalRoot
    ); 
}

Modal.propTypes = {
    modal: PropTypes.string   
};

export default Modal