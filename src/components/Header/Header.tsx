import React from 'react';
import {logOut} from "../../api/authAPI";
import cl from './Header.module.css'

const Header = () => {
    return (
        <div className={cl.headerContainer} >
            Домашняя страница
            <button onClick={logOut} >Выйти</button>
        </div>
    );
};

export default Header;