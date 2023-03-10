import React from 'react';
import cl from './QuizItem.module.css'
import {getQuizQuestionsCategory} from "../../reduxToolkit/slices/currentQuizSlices";
import {useAppDispatch} from "../../hooc";

interface ItemQuizProps {
    itemQuiz: string
}


const QuizItem = (itemQuiz: ItemQuizProps) => {

    const dispatch = useAppDispatch()

    const getQuiz = (itemQuiz:ItemQuizProps) => {
        dispatch(getQuizQuestionsCategory(itemQuiz.itemQuiz))
    }




    return (
        <div className={cl.itemQuiz}>
            <button onClick={() => getQuiz(itemQuiz)} className={cl.itemQuizButton} >
                {itemQuiz.itemQuiz}
            </button>
        </div>
    );
};

export default QuizItem;