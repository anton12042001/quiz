import React, {useState} from 'react';
import {FieldValue, useForm} from "react-hook-form";
import cl from './AuthForm.module.css'
import {signIn, signUp} from "../../api/authAPI";


export interface DataProps {
    email: string
    password: string
}


const AuthForm = () => {

    const [isRegistration, setIsRegistration] = useState(false)


    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data: FieldValue<DataProps>) => {
        if (isRegistration) {
            signUp(data as DataProps)
            return
        }
        signIn(data as DataProps)
        reset()
    }

    return (
        <div className={cl.authFormLogin}>
            <form className={cl.authFormLoginForm} onSubmit={handleSubmit(data => {
                onSubmit(data)
            })}>
                <div>
                    <input className={cl.signInInputEmail} placeholder={"Введите email"} {...register("email")}
                           type="email"/>
                </div>
                <div>
                    <input className={cl.signInInputPassword} placeholder={"Введите пароль"} {...register("password")}
                           type="password"/>
                </div>
                <button className={cl.buttonSignIp} type={"submit"}>{!isRegistration ? <div>Войти</div> :
                    <div>Зарегистрироваться</div>}</button>
                <div>
                    {!isRegistration ? <div>У вас еще нет аккаунта?</div> : <div>Уже есть аккаунт?</div>}
                    <button type={"button"}
                            className={cl.buttonNavigate}
                            onClick={() => setIsRegistration((prev) => !prev)}
                    >
                        <div>{!isRegistration ? <div>Зарегистрируйтесь</div> : <div>Войти</div>}</div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;