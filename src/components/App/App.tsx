import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from './App.module.css';
import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// Наш thunk для запроса данных с сервера
import { getFeed } from '../../services/actions/burgerIngridients';


function App() {  
  const { feed, feedRequest, feedFailed } = useSelector((state: RootStateOrAny) => ({
    feed: state.feedReducer.feed.data,
    feedRequest: state.feedReducer.feedRequest,
    feedFailed: state.feedReducer.feedFailed
  }));

  // Получаем метод dispatch
  const dispatch = useDispatch();
    
  useEffect(() => {
      // Отправляем экшен-функцию
    dispatch(getFeed())
  }, [])

  // const productData = useSelector(store => ({
  //   productData: store
  // }))
  // const [state, setState] = useState({ 
  //   productData: [],
  //   loading: true
  // });
  // const url = 'https://norma.nomoreparties.space/api/ingredients';

  // useEffect(() => {
  //   const getProductData = async () => {
  //     try {
  //       setState({...state, loading: true});
  //       const res = await fetch(`${url}`);
  //       if (!res.ok) {
  //         throw new Error('Ответ сети был не ok.');
  //       }
  //       const data = await res.json();
  //       setState({ productData: data.data, loading: false });
  //     }
  //     catch (error) {
  //       console.log('Возникла проблема с вашим fetch запросом: ', error)
  //     }        
  //   };
  //   getProductData();
  //   fetchBurgerIngridients()
  // }, [])
  if (feedFailed) {
    return <p>Произошла ошибка при получении данных</p>
  } else if (feedRequest) {
      return <p>Загрузка...</p>
  } else {
    return(       
      <>
        <AppHeader />        
        <DndProvider backend={HTML5Backend}>
          <div className={styles.box}>
            <BurgerIngredients/>
            <BurgerConstructor data={ feed }/>
          </div>
        </DndProvider>
      </>
    )
}
}

// const mapStateToProps = (store) => {
//   return {
//     productData: store.burgerIngridients.productData,
//     loading: store.burgerIngridients.loading
//   }
// }

// function mapDispatchToProps(dispatch){
//   return {
//     fetchBurgerIngridients: () => dispatch(fetchBurgerIngridients())
//   }
// }
export default App;
