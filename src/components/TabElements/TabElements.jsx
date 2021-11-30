import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './TabElements.module.css';
import { useSelector } from 'react-redux';
const initialState = 'one'

const TabElements = () => {
    const { scroll = initialState } = useSelector(store => ({
      scroll: store.feedReducer.scroll
    })) 
    const setCurrent = (event) => {
      console.log(event)
      if(event === 'one'){
        const scrollEl = document.getElementsByClassName('custom-scroll')
        scrollEl[0].scrollTo(0, 0)
      }
      else if(event === 'two'){
        const scrollEl = document.getElementsByClassName('custom-scroll')
        scrollEl[0].scrollTo(0, 350)
      }
      else if(event === 'three'){
        const scrollEl = document.getElementsByClassName('custom-scroll')
        scrollEl[0].scrollTo(0, 950)
      }
    }
    
    return (
      <div className={styles.box}>
        <Tab value="one" active={scroll === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={scroll === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={scroll === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    )
  }

export default TabElements;