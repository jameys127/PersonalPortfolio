'use client'

import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import AuthProvider, { useAuth } from '../lib/AuthContext';
import { attachAuth } from '../lib/api';
import ScrollTop from '../components/ScrollTop';

if(typeof window !== 'undefined' && process.env.NODE_ENV === 'production') disableReactDevTools();

// Keeps the axios instance in sync with the current access token
const AttachAuth = () => {
  const {auth, setAuth} = useAuth();
  useEffect(() => {
    attachAuth(auth.accessToken, setAuth);
  }, [auth, setAuth]);
  return null;
}

const Providers = ({children}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AttachAuth />
        <ScrollTop />
        {children}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default Providers;
