'use client'

import React from 'react'
import PublicIntro from './PublicIntro'
import './PublicBody.css'
import Cards from './Cards';
import Button from '@mui/material/Button';
import Link from 'next/link';
import AnimatedRoutes from '../../features/animated/AnimatedRoutes';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';

const PublicBody = ({projects}) => {

  const myTheme = createTheme({
    palette: {
      violet: {
        main: '#da70d6'
      }
    }
  })

  const ColorButton = styled(Button)(({theme}) => ({
    color: '#fff',
    background: '#282b2c',
    boxShadow: '5px 5px #701cbe',
    ":hover": {
      boxShadow: '5px 5px #8826e4ff'
    }
  }))

  return (
    <div className='body-container'>
      <AnimatedRoutes>
      <PublicIntro />
      <div className='card-grid-section'>
        <Cards initialData={projects} />
      </div>
      <div className='button-container'>
        <ThemeProvider theme={myTheme}>
          <ColorButton 
            component={Link} 
            href="/projects" 
            variant='outlined' 
            color='violet'
            size='large'
          >
            See more...
          </ColorButton>
        </ThemeProvider>
      </div>
      </AnimatedRoutes>
    </div>
  )
}

export default PublicBody
