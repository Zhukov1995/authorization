import React, { useEffect, useState } from "react";
import './form.scss';
import Button from "../UI/button/button";
import useAuth from "../../router/useAuth";
import { useNavigate } from "react-router-dom";
import IForm from "../../interfaces/IForm";

const Form = ({ isError, tryAuth, from }: IForm): JSX.Element => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>, setFunc: Function) => {
        setFunc(e.target.value);
    }

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(true)
            navigate(from, { replace: true });
        }
    }, []);


    return (
        <form className="form">
            <h3>Вход</h3>
            <p>Уникальная технология доступная для вашего бизнеса уже сейчас!</p>
            {isError && <div className="error">Неправильный логин или пароль.</div>}
            <input type="text" placeholder="Логин" onChange={(e) => changeInput(e, setUsername)} value={username} />
            <input type="password" placeholder="Пароль" onChange={(e) => changeInput(e, setPassword)} value={password} />
            <Button
                width='100%'
                radius="25px"
                value="Войти"
                type="button"
                onClick={() => tryAuth(username, password)}
            />
        </form>
    )
}

export default Form;