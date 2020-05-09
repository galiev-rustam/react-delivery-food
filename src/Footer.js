import React from 'react';
import logo from './img/logo.svg';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import vk from './img/vk.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-block">
          <img src={logo} alt="" className="logo footer-logo" />

          <nav className="footer-nav">
            <a href="#" className="footer-link">Ресторанам</a>
            <a href="#" className="footer-link">Курьерам</a>
            <a href="#" className="footer-link">Пресс-центр</a>
            <a href="#" className="footer-link">Контакты</a>
          </nav>

          <div className="social-links">
            <a href="#" className="social-link"><img src={instagram} alt="instagram" /></a>
            <a href="#" className="social-link"><img src={facebook} alt="facebook" /></a>
            <a href="#" className="social-link"><img src={vk} alt="vk" /></a>
          </div>
        </div>
      </div>
    </footer>
  )

};


export default Footer;