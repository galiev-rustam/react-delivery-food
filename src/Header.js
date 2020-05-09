import React from 'react';

import logo from './img/logo.svg';
import user from './img/user.svg';
import shoppingCart from './img/shopping-cart.svg';

function Header() {
  function foo() {
    console.log(1);
  }
  return (
    <div className="container">
      <header className="header">
        <a href="#" onClick={foo}>
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <input type="text" className="input input-address" placeholder="Адрес доставки" />
        <div className="buttons">
          <button className="button button-primary">
            <img src={user} alt="user" className="button-icon" />
            Войти
          </button>
          <button className="button">
            <img src={shoppingCart} alt="" className="button-icon" />
            <span className="button-text">Корзина</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;