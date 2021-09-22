import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    return(
        <head style={{ display: 'flex', justifyContent: 'center', background: '#1C1C21' }} className="p-4">
            <div style={{display: 'flex', marginRight: 112}}>
                <div style={{ display: 'flex', alignItems: 'center' }} className="pl-5 pr-5 pb-5 pt-5">
                    <div style={{ }} className="pr-2">
                        <BurgerIcon type="primary" />
                    </div>                    
                    <p className="text text_type_main-default">
                        Конструктор
                    </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }} className="pl-5 pr-5 pb-5 pt-5">
                    <div style={{ }} className="pr-2">
                        <ListIcon type="primary" />
                    </div>                      
                    <p className="text text_type_main-default">
                        Лента заказов
                    </p>
                </div>
            </div>            
            <div style={{ display: 'flex'}} className="pl-5 pr-5 pb-5 pt-5">
                <Logo />
            </div>        
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 289  }} className="pl-5 pr-5 pb-5 pt-5">
                <div style={{ }} className="pr-2">
                    <ProfileIcon type="primary" />
                </div>                 
                <p className="text text_type_main-default">
                    Личный кабинет
                </p>
            </div>        
        </head>
        
    )
}

export default AppHeader;