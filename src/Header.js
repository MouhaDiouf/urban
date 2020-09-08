import React from 'react';
import logo from './amazon_logo.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optoinLineOne">Hello Mouha</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optoinLineOne">Returns</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>
        <div className="header__optin">
          <span className="header__optoinLineOne">Your</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
