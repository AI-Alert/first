import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";

//Компонент авторизации

//Функция Login
const Login = () => {
    //инициализация стейта, содержащего email
    const [email, setEmail] = useState("")
    //инициализация стейта, содержащего пароль
    const [password, setPassword] = useState("")
    //инициализация переменной dispatch, которая включает в себя использование Dispatch
    const dispatch = useDispatch()

    return (
        //вывод формы входа с email и паролем
        <div className='authorization'>
            <div className="authorization__header">Authorization</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter password..."/>
            <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>SignIn</button>
        </div>
    );
};

export default Login;