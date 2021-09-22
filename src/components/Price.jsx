import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
const Price = (props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <p className={props.elClass + ' pr-2'}>{props.count}</p>
            <CurrencyIcon type="primary" className={props.elClass} />
        </div>
    )
}

export default Price;