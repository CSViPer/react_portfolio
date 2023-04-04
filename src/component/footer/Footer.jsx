import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {SlSocialGithub} from 'react-icons/sl'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Surankan</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/surankan.chakraborty.79"><FaFacebookF/></a>
        <a href="https://www.instagram.com/s.u.r.a.n.k.a.n/"><FiInstagram/></a>
        <a href="https://github.com/CSViPer"><SlSocialGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Surankan Chakraborty. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer