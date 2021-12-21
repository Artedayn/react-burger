import ConstructorElement from '../ConstructorElement/ConstructorElement';
import styles from './ProductSmall.module.css';
import PropTypes from 'prop-types';
import { useEffect, useMemo } from 'react';

const ProductSmall = (props) => {  
    const data = props.data 
    
    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type !== 'bun'), [data]);
    // const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);

    return (
      <div>
        { buns.map((state, index)=>( 
          <div key={state.id} className={styles.padding__top}>     
            { index === 0
            ? <ConstructorElement type="bun" position="top" isLocked={true} text={state.name + ' (верх)'} price={state.price} thumbnail={state.thumbnail} id={state.id} key={state.id}/>  
            : null
            } 
          </div>    
        ))}
        <div className={styles.scroll + ' custom-scroll'}>
        { mains.map((state, index)=>(         
          <ConstructorElement id={state.id} text={state.name} price={state.price} thumbnail={state.thumbnail} index={index} constructorId={state.constructorId} key={state.constructorId}/>         
        ))}
       
        </div>
       { buns.map((state, index)=>(  
        <div key={state.id} className={styles.padding__bottom}>    
            { index === 0
            ? <ConstructorElement type="bun" position="bottom" isLocked={true} text={state.name + ' (низ)'} price={state.price} thumbnail={state.thumbnail} id={state.id} key={state.id}/>  
            : null
            } 
          </div>      
        ))}       
      </div>
    )
}

ProductSmall.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired
    }),
    PropTypes.array,
  ])
};

export default ProductSmall;