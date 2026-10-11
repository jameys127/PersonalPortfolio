import {useAuth} from '../../app/context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
    const {auth, loading} = useAuth();
    const location = useLocation();

    if(loading) return null;

    if(!auth?.accessToken) {
        return <Navigate to='/login' state={{from: location}} replace />;
    }
    return <Outlet />
}

export default RequireAuth;