import React from 'react';
import cl from "../QuizItem/QuizItem.module.css";
import {useForm, FieldValue} from "react-hook-form";
import {getQuizQuestionsTags} from "../../reduxToolkit/slices/currentQuizSlices";
import {useAppDispatch} from "../../hooc";


interface DataForm {
    keyword: string
}

const GetKeywordQuestionsForm = () => {
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data: FieldValue<DataForm>) => {
        alert(JSON.stringify(data))
        if(typeof data === "string"){
            dispatch(getQuizQuestionsTags(data))
        }
        reset()
    }


    return (

        <form className={cl.formQuestions} onSubmit={handleSubmit(data => {
            onSubmit(data)
        })}>
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