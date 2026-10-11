'use client'

import {createContext, useState, useContext, useEffect} from 'react'
import api from './api'

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({accessToken: null});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try{
                const res = await api.get('/auth/refresh', {withCredentials: true});
                setAuth({accessToken: res.data.accessToken});
            }catch (err){
                console.log('No valid refresh token');
            }finally{
                setLoading(false);
            }
        }
        verifyRefreshToken();
    }, []);

    return (
        <AuthContext.Provider value={{auth, setAuth, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
