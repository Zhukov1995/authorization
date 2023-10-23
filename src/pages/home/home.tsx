import React from "react";
import './home.scss';

import { Link } from 'react-router-dom'
import Form from "../../components/form/form";
import Button from "../../components/UI/button/button";



const Home = (): JSX.Element => {
    return (
        <div className="home">
            <Link to={'/login'}>
                <Button width='300px' radius="25px" value="Авторизация" type="button" />
            </Link>
        </div>
    )
}

export default Home;