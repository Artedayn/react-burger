import PropTypes from 'prop-types';
import styles from './IngredientDetails.module.css';

const IngredientDetails = (props) => {
    return (
    <div className={styles.center}>
        <img src={props.state.image_large} alt="сочная новинка"></img>
        <p className="text text_type_main-medium mt-4">
            {props.state.name}
        </p>
        <div className={"mt-8 " + styles.box} >
            <p className="text text_type_main-default">
                Калории,ккал <br/>
                {props.state.calories}
            </p>
            <p className="text text_type_main-default">
                Белки, г <br/>
                {props.state.proteins}
            </p>
            <p className="text text_type_main-default">
                Жиры, г <br/>
                {props.state.fat}
            </p>
            <p className="text text_type_main-default">
                Углеводы, г <br/>
                {props.state.carbohydrates}
            </p>
        </div>
    </div>
    )
}

IngredientDetails.propTypes = {
    state: PropTypes.shape({
        image_large: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired
      })
};

export default IngredientDetails