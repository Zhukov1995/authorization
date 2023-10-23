import React from "react";
import './dashboard.scss';

import IStatistic from "../../interfaces/IStatistic";
import Widget from "../../components/widget/widget";
import Button from "../../components/UI/button/button";
import { Link } from "react-router-dom";
import useAuth from "../../router/useAuth";

const Dashboard = (): JSX.Element => {
    const { setAuth } = useAuth();


    const datas: IStatistic[] = [
        { active: 20, inactive: 4, completed: 7 },
        { active: 8, inactive: 8, completed: 3 },
        { active: 30, inactive: 5, completed: 4 },
    ];

    const logOut = () => {
        localStorage.removeItem('token');
        setAuth(false);
    }

    const viewData = datas.map((item, index) => {
        const labels = ['Сценарии', 'Списки', 'Диалоги'];
        return (
            <Widget data={item} key={index} label={labels[index]} />
        )
    })
    return (
        <div className="dashboard">
            <header>
                <Link to={'/login'}>
                    <Button
                        width='70px'
                        radius="10px"
                        value="Выйти"
                        type="button"
                        onClick={() => logOut()}
                    />
                </Link>
            </header>
            <div className='container'>{viewData}</div>
            <footer>
                <a href="https://portfolio-app-woad-eight.vercel.app/" target="_blank">Created by Zhukov R. V.</a>
            </footer>
        </div>
    )
}

export default Dashboard;