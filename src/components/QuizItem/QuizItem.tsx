import React from 'react';
import cl from './QuizItem.module.css'

interface ItemQuizProps {
    itemQuiz: string
}


const QuizItem = ({itemQuiz}: ItemQuizProps) => {
    return (
        <div className={cl.itemQuiz}>
            <button className={cl.itemQuizButton} >
                {itemQuiz}
            </button>
        </div>
    );
};

export default QuizItem;