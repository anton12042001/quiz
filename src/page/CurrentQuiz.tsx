import React from 'react';
import {useAppSelector} from "../hooc";
import CurrentQuizItem from "../components/CurrentQuizItem/CurrentQuizItem";

const CurrentQuiz = () => {

    const {currentQuiz} = useAppSelector(state => state.currentQuiz)
    console.log(currentQuiz)

    return (
        <div>
            {currentQuiz.map(q => <CurrentQuizItem questionItem={q}/>)}
        </div>
    );
};

export default CurrentQuiz;