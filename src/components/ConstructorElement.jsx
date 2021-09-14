import BottomElement from './BottomElement';
import MiddleElement from './MiddleElement';
import TopElement from './TopElement';


const ConstructorElement = (props) => {
    return(
        
        <div style={{ width: 568 }} >
        { props.type === 'bun' && props.position === "top"
        ? 
            <TopElement {...props}/>
        : props.type === 'bun' && props.position === "bottom"
        ?
            <BottomElement {...props}/>
        :
            <MiddleElement {...props} />
        }
        </div>
    )
}

export default ConstructorElement 