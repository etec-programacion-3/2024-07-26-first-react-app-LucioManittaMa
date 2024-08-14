import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container1">
      <div className="logo">
        <img src="./Multimedia/UrbanLogo.png" alt="Logo1" className="titleImg" />
      </div>
      <div className="right-section">
        <div className="search-button">
          <i className="fas fa-search"></i>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="account">
          <div className="cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </div>
          <div className="account-icon">
            <i className="fas fa-user"></i>
            <div className="account-dropdown">
              <div className="dropdown-options">
                <ul className="dropdown-optionsUl">
                  <li id="login-button">Log In</li>
                  <li id="signin-button">Sign In</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <button className="menu-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className="menu-list">
            <li><a href="#">Products</a></li>
            <li><a href="#">Nike</a></li>
            <li><a href="#">Puma</a></li>
            <li><a href="#">Adidas</a></li>
            <li><a href="#">Vans</a></li>
            <li><a href="#">DCshoes</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
