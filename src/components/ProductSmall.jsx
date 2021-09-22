import ConstructorElement from './ConstructorElement';

const ProductSmall = (props) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
        { props.data.map((state, index)=>(
          <>
          { state.type === 'bun' && state.count === 1
          ? 
            <ConstructorElement type="bun" position="top" isLocked={true} text={state.name + ' (верх)'} price={state.price} thumbnail={state.image_mobile}/>
          : 
            null
          }             
          </>
        ))}
        <div style={{ overflowY: 'auto', height: 464, display: 'flex', flexDirection: 'column', gap: 10 }} className='custom-scroll'>
        { props.data.map((state, index)=>(
          <>
          { state.type === 'main' && state.count === 1
          ? 
            <ConstructorElement text={state.name} price={state.price} thumbnail={state.image_mobile}/>
          : 
            null
          }
          
          </>
        ))}
        { props.data.map((state, index)=>(
          <>
          { state.type === 'sauce' && state.count === 1
          ? 
            <ConstructorElement text={state.name} price={state.price} thumbnail={state.image_mobile}/>
          : 
            null
          }
           
          </>
        ))}
        </div>
       { props.data.map((state, index)=>(
          <>
          { state.type === 'bun' && state.count === 1
          ? 
            <ConstructorElement type="bun" position="bottom" isLocked={true} text={state.name + ' (низ)'} price={state.price} thumbnail={state.image_mobile}/>
          : 
            null
          }
           
          </>
        ))}       
      </div>
    )
}
export default ProductSmall;