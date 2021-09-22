import BottomElement from '../BottomElement/BottomElement';
import MiddleElement from '../MiddleElement/MiddleElement';
import TopElement from '../TopElement/TopElement';
import styles from './ConstructorElement.module.css';


const ConstructorElement = (props) => {
    return(
        
        <div className={styles.container}>
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