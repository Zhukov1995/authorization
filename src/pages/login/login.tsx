import React, { useState } from "react";
import './login.scss';

import Form from "../../components/form/form";
import useAuth from "../../router/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { USER_AUTH } from "../../apollo/queries";


const Login = (): JSX.Element => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    const [authUser] = useMutation(USER_AUTH);
    const [isError, setIsError] = useState<boolean>(false);

    const tryAuth = (username: string, password: string) => {
        if (!username.length || !password.length) return alert('Заполните форму');
        authUser({
            variables: {
                username: username,
                password: password
            }
        })
            .then(data => {
                setAuth(true)
                navigate(from, { replace: true });
                if (localStorage.getItem('token') === null) {
                    localStorage.setItem('token', data.data.login.token);
                }
            })
            .catch(() => setIsError(true));
    }

    return (
        <div className="login">
            <Form isError={isError} tryAuth={tryAuth} from={from} />
        </div>
    )
}

export default Login;
