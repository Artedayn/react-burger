import done from '../../images/done.png';
import styles from './OrderDetails.module.css';

const OrderDetails = () => {
    return(
        <div className={"pt-30 " + styles.center}>
                    <p className={'text text_type_digits-large ' + styles.idintificate}>034536</p>
                    <p className="text text_type_main-medium mt-8">
                        идентификатор заказа
                    </p>
                    <div className="mt-15">
                        <img src={done} alt="готово"></img>
                    </div>
                    <p className="text text_type_main-default mt-15">
                        Ваш заказ начали готовить
                    </p>
                    <p className={"text text_type_main-default mt-2 " + styles.dark_text} >
                        Дождитесь готовности на орбитальной станции
                    </p>
                </div>
    )
}

export default OrderDetails