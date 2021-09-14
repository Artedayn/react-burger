import './App.css';
import AppHeader from './components/AppHeader';
import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import data from './utils/data.js';

function App() {
  return (
    <>
      <AppHeader />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </div>
    </>
  );
}

export default App;
