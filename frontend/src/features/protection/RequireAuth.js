'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {useAuth} from '../../lib/AuthContext';

const RequireAuth = ({children}) => {
    const {auth, loading} = useAuth();
    const router = useRouter();
    const allowed = !loading && auth?.accessToken;

    // Sign out sets redirectTo: '/' so it lands on the home page instead of /login
    useEffect(() => {
        if(!loading && !auth?.accessToken) router.replace(auth?.redirectTo || '/login');
    }, [loading, auth, router]);

    if(!allowed) return null;
    return children;
}

export default RequireAuth;
