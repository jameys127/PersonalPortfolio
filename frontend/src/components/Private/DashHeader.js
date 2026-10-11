'use client'

import Link from 'next/link'
import './DashHeader.css'
import { useMutation } from '@tanstack/react-query';
import api from '../../lib/api';
import { useAuth } from '../../lib/AuthContext';

const DashHeader = () => {
  const {setAuth} = useAuth();

  const logout = () => {
    logoutMutation.mutate();
  }

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await api.post('/auth/logout', {}, {withCredentials: true});
      return res.data;
    },
    onSuccess: (data) => {
      // RequireAuth handles the redirect once the token is cleared
      setAuth({accessToken: null, redirectTo: '/'});
    }
  })

  return (
    <nav className='dash-navbar'>
      <div className='dash-navbar-container'>
        <Link href='/dash' className='dash-navbar-logo'>
          Dashboard <i className='fa-solid fa-code' />
        </Link>
        <ul className='dash-nav-menu'>
          <li className='dash-nav-item' onClick={logout}>
            <div className='dash-nav-links'>
              <i className="fa-solid fa-arrow-right-from-bracket" /> SignOut
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default DashHeader
