import React from 'react'
import Link from 'next/link';
import './PublicFooter.css'

const PublicFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-snippet">
        Passion for GameDev |<br /> Wanting to learn all that I possibly can!
      </div>
      <div className="public-footer">
        ©{currentYear} Jeremiah Sheehy. All rights reserved
      </div>
      <ul className="footer-link-list">
        <li>
          <a href="https://github.com/jameys127" target="_blank" rel="noopener noreferrer">
            Github <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jeremiah-sheehy-225bba258/" target="_blank" rel="noopener noreferrer">
            Linkedin <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="/JeremiahSheehyResume2026.pdf" target="_blank" rel="noopener noreferrer">
            Resume <i className="fa-solid fa-file"></i>
          </a>
        </li>
      </ul>
      <Link href={'/login'} className='to-private'>
        If you're me <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </footer>
  )
}

export default PublicFooter
