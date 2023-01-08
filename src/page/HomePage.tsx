import React, {useEffect, useState} from 'react';
import {logOut} from "../api/authAPI";
import {useNavigate} from "react-router-dom";
import {getCurrentQuizQuestionsCategory} from "../reduxToolkit/slices/currentQuizSlices";
import {useAppDispatch} from "../hooc";
import QuizItem from "../components/QuizItem/QuizItem";
import cl from './../components/QuizItem/QuizItem.module.css'


const HomePage = () => {
    const navigate = useNavigate()
    const [allQuiz,setAllQuiz] = useState(["Linux","DevOps","Networking","Programming ","Cloud","Docker","Kubernetes"])
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getCurrentQuizQuestionsCategory())
    },[])



    return (
        <div>
            <div className={cl.quizItemContainer} >{allQuiz.map(i => <QuizItem itemQuiz={i} />)}</div>
        </div>
    );
};

export default HomePage;