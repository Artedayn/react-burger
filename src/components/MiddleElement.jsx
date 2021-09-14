import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import topImage from '../images/ingredient_m.png';
import Price from './Price';
import PropTypes from 'prop-types';

const MiddleElement = (props) => {
    return (        
        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div style={{display: 'flex', alignItems: 'center'}} className="pr-2">                
                <DragIcon type="primary" />
            </div> 
            <div className="pl-6 pr-8 " style={{ display: 'flex', justifyContent: 'space-between', backgroundImage:`url(${topImage})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', width: 536  }}>         
                <div className="pr-5" >
                    <img src={props.thumbnail}  alt="ингредиент"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}} className="pr-5">
                    <p className="text text_type_main-default" style={{minWidth: 182}}>
                        {props.text}.
                    </p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}} className="pr-5">
                    <Price count={props.price} elClass={'text text_type_main-default'}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <DeleteIcon type="primary" />
                </div>
            </div> 
        </div>
    )
}

MiddleElement.propTypes = {
    text: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
}; 

export default MiddleElement