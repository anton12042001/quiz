import React from 'react';
import {logOut} from "../api/authAPI";
import {useNavigate} from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate()



    return (
        <div>
            Домашняя страница
            <button onClick={logOut} >Выйти</button>
            <button onClick={() => navigate('/createNewQuiz')} >Создать опросник</button>
        </div>
    );
};

export default HomePage;