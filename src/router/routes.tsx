import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Dashboard from '../pages/dashboard/dashboard';
import { PrivateRoute } from './privateRoute';


const useRoutes = (): JSX.Element => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />

            <Route element={<PrivateRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default useRoutes;