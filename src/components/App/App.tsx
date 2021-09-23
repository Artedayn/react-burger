import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from './App.module.css';
import { menuItemPropTypes } from '../../utils/constants';

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
        if (!res.ok) {
          throw new Error('Ответ сети был не ok.');
        }
        const data = await res.json();
        setState({ productData: data.data, loading: false });
      }
      catch (error) {
        console.log('Возникла проблема с вашим fetch запросом: ', error)
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

App.propTypes = {
  productData: menuItemPropTypes
};

export default App;
