import React, {useState} from 'react';
import {FieldValue, useForm} from "react-hook-form";
import cl from './NewQuizForm.module.css'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import {saveQuestionnaire} from "../../reduxToolkit/slices/questionnaires";



interface IQuestion {
    question:string
}

interface DataProps {
    data:string

}


const NewQuizForm = () => {

    const [newQuestion, setNewQuestion] = useState<IQuestion[]>([{question: ''}])
    const [userData, userLoading] = useAuthState(auth)
    console.log(userData)

    const handleQuestion = () => {
        setNewQuestion([...newQuestion, {question: ''}])
    }

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data:FieldValue<DataProps>) => {
        console.log(data)
        reset()
    }


    return (
        <div className={cl.formWrapper}>
            <form className={cl.formContainer} onSubmit={handleSubmit(data => {
                onSubmit(data)
            })}>
                <div>
                    <input placeholder={"Введите название"} {...register("quizName")}
                           type="text"/>
                </div>
                <div>
                    <input placeholder={"Опишите опросник"} {...register("aboutQuiz")}
                           type="text"/>
                </div>
                {newQuestion.map((signleQuestion, index) => (
                    <div className={cl.singleQuestion} >
                        <div>Вопрос {index + 1}</div>
                        <input placeholder={"Вопрос"} {...register(`question${index}`)} type="text"/>
                    </div>
                ))}
                <button onClick={handleQuestion} type={"button"}>Добавить вопрос</button>
                <button type={"submit"} >Создать</button>
            </form>
        </div>
    );
};

export default NewQuizForm;