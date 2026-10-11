'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import './PublicHeader.css';

const PublicHeader = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link href='/' className='navbar-logo'>
          Jeremiah<span className='last-name'>Sheehy</span> <i className='fa-solid fa-code' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link href='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>


    // <header className='publicHeader'>
    //     <h1>Welcome to my <span className='nowrap'>PersonalPlayground</span></h1>
    //   </header>
  )
}

export default PublicHeader
