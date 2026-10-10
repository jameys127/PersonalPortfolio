import React from 'react'
import './PublicIntro.css'

const PublicIntro = () => {
  return (
    <div className='intro-container'>
        {/* <img src='/IMG_2879.jpg' alt='Selfie' /> */}
        <div className='intro-box'>
          <h1>Hi, I'm Jamey</h1>
          <div className='intro-flex'>
            <div className='intro-para'>
              <p>This will be my personal portfolio that showcases the projects I've built and the technologies I've explored along the way.<br/> I'm a junior software developer with a curiosity for all kinds of systems and tools, and I'm always looking to learn as much as I can.<br/> This website is my corner of the internet to share my work and document my journey as a developer.</p>
            </div>
            <div className='intro-image'>
              <img src='/IMG_2879.jpg' alt='Selfie' />
            </div>
          </div>
        </div>
        {/* <div className='intro-image'>
          <img src='/IMG_2879.jpg' alt='Selfie' />
        </div> */}
    </div>
  )
}

// This will be my personal portfolio of different projects that I decide to show off. I am a junior software developer that seems take an interest in all sorts of different projects and technologies. I have always loved to learn as much as I possibly can and this site will be my own corner of the internet to document my journey.

export default PublicIntro
