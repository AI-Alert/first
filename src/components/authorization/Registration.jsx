import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    //инициализация стейта, содержащего email
    const [email, setEmail] = useState("")
    //инициализация стейта, содержащего пароль
    const [password, setPassword] = useState("")

    return (
        //вывод формы регистрации с email и паролем
        <div className='authorization'>
            <div className="authorization__header">Registration</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter password..."/>
            <button className="authorization__btn" onClick={() => registration(email, password)}>SignUp</button>
        </div>
    );
};

export default Registration;