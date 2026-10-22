import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CardItem.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CardItem = (prop) => {
    const {pathname} = useLocation();
    let cardLink = '';
    if(pathname === '/projects' || pathname === '/'){
        cardLink = `/projects/${prop.slug}`;
    }else if(pathname === '/dash'){
        cardLink = `/dash/${prop.slug}`;
    }


  return (
    <Card sx={{
        width: '100%',
        maxWidth: 400,
        height: 'auto',
        backgroundColor: 'transparent',
        // borderRadius: 3,
        border: 'var(--color-accent-2) 1px solid',
        boxShadow: '8px 8px var(--color-shadow)',
        '&:hover': {
            transform: 'scale(1.03)'
        },
        transition: 'all 0.3s ease'
        }}>
        <CardActionArea LinkComponent={Link} to={cardLink}>
            <CardMedia
                component="img"
                height="200"
                image={prop.img}
                alt="project img"
                sx={{
                    filter: pathname === '/dash' ? 'blur(1.5px) brightness(0.6)' : ''
                }}
            />
            {pathname === '/dash' && ( 
                <Box sx={{
                    position: 'absolute',
                    color: 'var(--color-text)',
                    top: 80,
                    width: '100%',
                    textAlign: 'center',
                    background: 'transparent',
                    boxShadow: 'none',
                    fontWeight: 'bold',
                    fontSize: '2rem'
                }}>Edit</Box>
            )}
            <CardContent sx={{color: 'var(--color-text)', background: 'var(--color-surface)'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 700}}>{prop.title}</Typography>
                <Typography textAlign="left" sx={{
                    color: 'var(--color-text)',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                }}>{prop.description}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default CardItem
