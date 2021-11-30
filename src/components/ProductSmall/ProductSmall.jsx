import ConstructorElement from '../ConstructorElement/ConstructorElement';
import styles from './ProductSmall.module.css';
import { useMemo } from 'react';
import { useSelector} from 'react-redux';

const initialState = []

const ProductSmall = (props) => {  
    const data = props.data 
    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);

    return (
      <div >
        { buns.map((state, index)=>( 
          <div key={state._id} className={styles.padding__top}>     
            { index === 0
            ? <ConstructorElement type="bun" position="top" isLocked={true} text={state.name + ' (верх)'} price={state.price} thumbnail={state.thumbnail} />  
            : null
            } 
          </div>    
        ))}
        <div className={styles.scroll + ' custom-scroll'}>
        { mains.map((state, index)=>(         
          <ConstructorElement id={state.id} text={state.name} price={state.price} thumbnail={state.thumbnail} key={index}/>         
        ))}
        { sauces.map((state, index)=>(          
          <ConstructorElement id={state.id} text={state.name} price={state.price} thumbnail={state.thumbnail} key={index}/>          
        ))}
        </div>
       { buns.map((state, index)=>(  
        <div key={state._id} className={styles.padding__bottom}>    
            { index === 0
            ? <ConstructorElement type="bun" position="bottom" isLocked={true} text={state.name + ' (низ)'} price={state.price} thumbnail={state.thumbnail} />  
            : null
            } 
          </div>      
        ))}       
      </div>
    )
}
export default ProductSmall;