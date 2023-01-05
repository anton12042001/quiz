import React from 'react';
import {logOut} from "../api/authAPI";

const HomePage = () => {


    return (
        <div>
            Домашняя страница
            <button onClick={logOut} >Выйти</button>
        </div>
    );
};

export default HomePage;