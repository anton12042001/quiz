import React from 'react';
import { useForm } from "react-hook-form";
import cl from './AuthForm.module.css'

const AuthForm = () => {


    interface DataProps {
        data: {
            email:string
            password:string
        }
    }


    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = ({data}: DataProps) => {
        reset()
    }

    return (
        <div >
            <form className={cl.authFormLogin}  onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={cl.signInInputEmail}  placeholder={"Введите email"} {...register("email")} type="email"/>
                </div>
                <div>
                    <input className={cl.signInInputPassword}  placeholder={"Введите пароль"} {...register("password")} type="password"/>
                </div>
                <button className={cl.buttonSignIp}  type={"submit"}>Войти</button>
            </form>
        </div>
    );
};

export default AuthForm;