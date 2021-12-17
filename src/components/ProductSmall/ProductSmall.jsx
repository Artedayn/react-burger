import ConstructorElement from '../ConstructorElement/ConstructorElement';
import styles from './ProductSmall.module.css';
import { useEffect, useMemo } from 'react';

const ProductSmall = (props) => {  
    const data = props.data 
    useEffect(() => {
      console.log(data)
    }, [data])
    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type !== 'bun'), [data]);
    // const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);

    return (
      <div>
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
          <ConstructorElement id={state.id} text={state.name} price={state.price} thumbnail={state.thumbnail} index={index} constructorId={state.constructorId} key={index}/>         
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