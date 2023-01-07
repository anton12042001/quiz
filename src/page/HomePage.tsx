import React, {useEffect} from 'react';
import {logOut} from "../api/authAPI";
import {useNavigate} from "react-router-dom";
import {getCurrentQuizQuestions} from "../reduxToolkit/slices/currentQuiz";
import {useAppDispatch} from "../hooc";



const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getCurrentQuizQuestions())
    },[])



    return (
        <div>
            Домашняя страница
            <button onClick={logOut} >Выйти</button>

        </div>
    );
};

export default HomePage;