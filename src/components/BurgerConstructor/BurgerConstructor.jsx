import ProductSmall from "../ProductSmall/ProductSmall";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../Price/Price';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';

import Modal from "../Modal/Modal";
import React from "react";
import { useEffect } from "react";

const BurgerConstructor = (props) => {
    const [modal, openModal] = React.useState("none");

    useEffect(()=>{       
        document.addEventListener("keydown", keyEsc);
        return () => {
            document.removeEventListener("keydown", keyEsc);
        }
    }, [])

    const handleClickButton = () => { 
        handleOpenModal();        
    };

    const handleCloseModal = (e) => {
        openModal(modal === "none" ? "block" : "none");       
    };

    const handleOpenModal = () => {
        openModal(modal === "none" ? "block" : "none");        
    };

    const keyEsc = (e) => {        
        if(e.key === "Escape") {
            openModal(modal === "block" ? "block" : 'none');
        }        
    }

    return(
        <>
        <Modal            
            handleCloseModal={handleCloseModal}            
            modal={modal} 
            state={props.data} 
            modalType = {'null'}
            keyEsc = {keyEsc} />     
        <div className="mt-25 ml-10">
            <ProductSmall data={props.data}/>
            <div className={ styles.price + " mt-10"}>
                <Price count={620} elClass={'text text_type_digits-medium'}/>
                <div className="ml-10">
                    <Button type="primary" size="medium" onClick={handleClickButton}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </div>
        
        </>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.array.isRequired
}; 

export default BurgerConstructor;