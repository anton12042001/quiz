import React, {useState} from 'react';
import QuizItem from "../components/QuizItem/QuizItem";
import cl from './../components/QuizItem/QuizItem.module.css'
import GetKeywordQuestionsForm from "../components/GetKeywordQuestionsForm/GetKeywordQuestionsForm";


const HomePage = () => {
    const [allQuiz, setAllQuiz] = useState(["Linux", "DevOps", "Docker",])

    return (
        <div className={cl.homePageContainer}>
            <div className={cl.quizItemContainer}>{allQuiz.map(i => <QuizItem itemQuiz={i}/>)}</div>
            <GetKeywordQuestionsForm/>
        </div>
    );
};

export default HomePage;