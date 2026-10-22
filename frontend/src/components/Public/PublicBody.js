import React from 'react'
import PublicIntro from './PublicIntro'
import './PublicBody.css'
import Cards from './Cards';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AnimatedRoutes from '../../features/animated/AnimatedRoutes';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';

const PublicBody = () => {

  const myTheme = createTheme({
    palette: {
      violet: {
        main: '#da70d6'
      }
    }
  })

  const ColorButton = styled(Button)(({theme}) => ({
    color: 'var(--color-text)',
    background: 'var(--color-surface)',
    boxShadow: '5px 5px var(--color-shadow)',
    ":hover": {
      boxShadow: '5px 5px var(--color-shadow-hover)'
    }
  }))

  return (
    <div className='body-container'>
      <AnimatedRoutes>
      <PublicIntro />
      <div className='card-grid-section'>
        <Cards />
      </div>
      <div className='button-container'>
        <ThemeProvider theme={myTheme}>
          <ColorButton 
            component={Link} 
            to="/projects" 
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
