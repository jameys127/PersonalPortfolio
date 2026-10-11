'use client'

import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { usePathname } from 'next/navigation'
import {useQuery} from '@tanstack/react-query'
import api from '../../lib/api'
import CircularProgress from '@mui/material/CircularProgress';

const Cards = ({initialData}) => {

  const pathname = usePathname();
  const {isPending, error, data} = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await api.get('/projects');
      return res.data;
    },
    initialData
  });

  if(isPending){
    return <div className='loading'><CircularProgress /></div>
  }
  if(error){
    const message = error?.response?.data?.message || error.message || "Server Error";
    return <p className='loading'>Error: {message}</p>
  } 
  if(!Array.isArray(data)){
    return <p className='loading'>No Projects Found</p>;
  }

  if(pathname === '/projects'){
    return(
      <div className='cards'>
        {data.map((p) => (
          <CardItem
            key={p.id}
            img={p.images[0]}
            title={p.title}
            description={p.short}
            slug={p.slug}
            />
        ))}
      </div>
    )
  }else{
    return (
      <div className='cards'>
        {data.slice(0, 3).map((p) => (
          <CardItem
            key={p.id}
            img={p.images[0]}
            title={p.title}
            description={p.short}
            slug={p.slug}
          />
        ))}
      </div>
    )
  }

}

export default Cards
