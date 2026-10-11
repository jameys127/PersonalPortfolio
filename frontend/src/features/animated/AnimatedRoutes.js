import React from 'react'

// Fade + slight rise when a page mounts. The animation lives in index.css (.page-in)
const AnimatedRoutes = ({children}) => {
  return (
    <div className='page-in'>
        {children}
    </div>
  )
}

export default AnimatedRoutes
