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
    color: '#fff',
    background: '#282b2c',
    boxShadow: '6px 4px #701cbe',
    ":hover": {
      boxShadow: '6px 4px #8826e4ff'
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
