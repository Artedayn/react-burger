import close from '../../images/close.png';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Modal = (props) => {    
    
    return (  
        <>
        { (props.modal === 'block')
        ?
           <div className={"pb-30 " + styles.block}>   
                <div>
                    <img src={close} onClick={props.handleCloseModal} className={styles.close} alt="закрыть"></img>
                </div>
                { props.modalType === 'ingredients'
                ?
                <>
                <div className={"m-10 pt-3 " + styles.center}>
                    <p className="text text_type_main-large">
                        Детали ингридиента
                    </p>                
                </div>
                <IngredientDetails state={props.state}/>
                </>
                :
                <OrderDetails />
                }
            </div>
            
        :        
            null
        }
        <ModalOverlay modal={props.modal} state={props.state} keyEsc={props.keyEsc}/> 
       </> 
    ); 
}

Modal.propTypes = {
    modal: PropTypes.string   
};

export default Modal