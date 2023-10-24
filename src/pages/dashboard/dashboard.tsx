import React from "react";
import './dashboard.scss';
import './media.scss';

import IStatistic from "../../interfaces/IStatistic";
import Widget from "../../components/widget/widget";
import Button from "../../components/UI/button/button";
import { Link } from "react-router-dom";
import useAuth from "../../router/useAuth";

const Dashboard = (): JSX.Element => {
    const { setAuth } = useAuth();

    // mock data dashboard
    const data: IStatistic[] = [
        { name: 'Сценарии', active: 20, inactive: 4, completed: 7 },
        { name: 'Списки', active: 8, inactive: 8, completed: 3 },
        { name: 'Диалоги', active: 30, inactive: 5, completed: 4 },
    ];

    const logOut = () => {
        localStorage.removeItem('token');
        setAuth(false);
    }

    const viewData = data.map((item, index) => {
        return (
            <Widget data={item} key={index} label={data[index].name} />
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