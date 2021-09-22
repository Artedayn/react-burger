import ProductSmall from "./ProductSmall";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from './Price';

const BurgerConstructor = (props) => {    
    return(
        <>
        <div className="mt-25 ml-10">
            <ProductSmall data={props.data}/>
            <div style={{display: 'flex', justifyContent: 'flex-end'}} className="mt-10">
                <Price count={620} elClass={'text text_type_digits-medium'}/>
                <div className="ml-10">
                    <Button type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default BurgerConstructor;