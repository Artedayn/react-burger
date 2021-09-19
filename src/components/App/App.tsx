import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState({ 
    productData: [],
    loading: true
  });
  const url = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    const getProductData = async () => {
      try {
        setState({...state, loading: true});
        const res = await fetch(`${url}`);
        const data = await res.json();
        setState({ productData: data.data, loading: false });
      }
      catch {
        console.log('Ошибке')
      }        
    };
    getProductData();
  }, [])
   
  return (
    <>
      <AppHeader />
      <div className={styles.box}>
        <BurgerIngredients data={state.productData}/>
        <BurgerConstructor data={state.productData}/>
      </div>
    </>
  );
}

export default App;
