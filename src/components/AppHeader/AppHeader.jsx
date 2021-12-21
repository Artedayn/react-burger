import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';

const AppHeader = () => {
    return(
        <header className={styles.header + " p-4"}>
            <div className={styles.menu}>
                <a href="#" className={styles.item + " pl-5 pr-5 pb-5 pt-5"}>
                    <div className="pr-2">
                        <BurgerIcon type="primary" />
                    </div>                    
                    <p className="text text_type_main-default">
                        Конструктор
                    </p>
                </a>
                <a href="#" className={styles.item + " pl-5 pr-5 pb-5 pt-5"}>
                    <div className="pr-2">
                        <ListIcon type="primary" />
                    </div>                      
                    <p className="text text_type_main-default">
                        Лента заказов
                    </p>
                </a>
            </div>            
            <div className={styles.logo + " pl-5 pr-5 pb-5 pt-5"}>
                <Logo />
            </div>        
            <a href="#" className={styles.profile + " pl-5 pr-5 pb-5 pt-5"}>
                <div className="pr-2">
                    <ProfileIcon type="primary" />
                </div>                 
                <p className="text text_type_main-default">
                    Личный кабинет
                </p>
            </a>        
        </header>
        
    )
}

export default AppHeader;