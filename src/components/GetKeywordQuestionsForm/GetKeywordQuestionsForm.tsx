import React from 'react';
import cl from "../QuizItem/QuizItem.module.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {getQuizQuestionsTags} from "../../reduxToolkit/slices/currentQuizSlices";
import {useAppDispatch, useAppSelector} from "../../hooc";
import {useNavigate} from "react-router-dom"

type DataForm = {
    keyword: string
}

const GetKeywordQuestionsForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset
    } = useForm<DataForm>();


    const onSubmit:SubmitHandler<DataForm> = (data) => {
        dispatch(getQuizQuestionsTags(data.keyword))
            .then(() => navigate('/currentQuiz'))
    }


    return (

        <form className={cl.formQuestions} onSubmit={handleSubmit(onSubmit)}>
            <div>Введите ключевое слово для поиска</div>
            <div>
                <input placeholder={"Введите ключевое слово"} {...register("keyword")}
                       type="text"/>
            </div>
            <button>Начать поиски</button>
        </form>

    );
};

export default GetKeywordQuestionsForm;