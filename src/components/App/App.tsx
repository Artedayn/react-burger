import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import data from '../../utils/data.js';
import styles from './App.module.css';

function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.box}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </div>
    </>
  );
}

export default App;
