import ConstructorElement from '../ConstructorElement/ConstructorElement';
import styles from './ProductSmall.module.css';
import { useMemo } from 'react';

const ProductSmall = (props) => {
    const data = props.data;
    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);


    return (
      <div className={styles.colomn}>
        { buns.map((state, index)=>( 
          <div key={state._id}>     
            { index === 0
            ? <ConstructorElement type="bun" position="top" isLocked={true} text={state.name + ' (верх)'} price={state.price} thumbnail={state.image_mobile} />  
            : null
            } 
          </div>    
        ))}
        <div className={styles.scroll + ' custom-scroll'}>
        { mains.map((state, index)=>(         
          <ConstructorElement text={state.name} price={state.price} thumbnail={state.image_mobile} key={state._id}/>         
        ))}
        { sauces.map((state, index)=>(          
          <ConstructorElement text={state.name} price={state.price} thumbnail={state.image_mobile} key={state._id}/>          
        ))}
        </div>
       { buns.map((state, index)=>(  
        <div key={state._id}>    
            { index === 0
            ? <ConstructorElement type="bun" position="bottom" isLocked={true} text={state.name + ' (низ)'} price={state.price} thumbnail={state.image_mobile} />  
            : null
            } 
          </div>      
        ))}       
      </div>
    )
}
export default ProductSmall;