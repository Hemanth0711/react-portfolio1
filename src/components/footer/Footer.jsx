import React from 'react'
import './footer.css'
import {IoLogoLinkedin} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id = 'footer'>
      <a href="#" class = "footer__logo">Hemanth Sai G</a>

      <ul className='permalinks'>
        <li><a href = "#">Home</a></li>
        <li><a href = "#aout">About</a></li>
        <li><a href = "#experience">Experience</a></li>
        <li><a href = "#services">Services</a></li>
        <li><a href = "#portfolio">Portfolio</a></li>
        <li><a href = "#testimonials">Testimonials</a></li>
        <li><a href = "#contact">Contact</a></li>
      </ul>

      <div className= 'footer__socials'>
        <a href = "https://linkedin.com"><IoLogoLinkedin /></a>
        <a href = "https://instagram.com"><FiInstagram /></a>
        <a href = "https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer