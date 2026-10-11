'use client'

import React, { useState } from 'react'
import './Login.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import api from '../../lib/api';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../../lib/AuthContext';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const {setAuth} = useAuth();
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    submitMutation.mutate({username, password});
  }

  const submitMutation = useMutation({
    mutationFn: async ({username, password}) => {
      const res = await api.post('/auth', {username, password}, {withCredentials: true});
      return res.data;
    },
    onSuccess: (data) => {
      setAuth({accessToken: data.accessToken});
      router.push('/dash')
    },
    onError: (err) => {
      if(!err.response){
        setErrMsg('No server response');
      }else if(err.response.status === 401){
        setErrMsg('Incorrect username or password');
      }else if(err.response.status === 400){
        setErrMsg('Missing username or password')
      }else{
        setErrMsg('Login failed. Please try again later');
      }
    }
  })


  const usernameInput = (e) =>{
    setUsername(e.target.value);
    setErrMsg('')
  }
  const passwordInput = (e) =>{
    setPassword(e.target.value);
    setErrMsg('')
  }

  return (
    <div className='login-container'>
      <div className='login'>
        <Link href={'/'} className='login-back'><i className='fa-solid fa-arrow-left'/> Back</Link>
        <h1 className='login-title'>Welcome, Me</h1>
        <form onSubmit={submit}>
          <div className='login-inputs'>
            <div className='login-input'>
              <input 
                type='text'
                placeholder='Username'
                value={username}
                onChange={usernameInput}
                autoComplete='off'
                required
              />
            </div>
            <div className='login-input'>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={passwordInput}
                required
              />
            </div>
          </div>
          <div className='login-button'>
            <button className='button' type='submit'>Login</button>
          </div>
          <p className='error-message'>{errMsg}</p>
        </form>
      </div>
    </div>
  )
}

export default Login
