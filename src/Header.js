import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="App-main-header">
      <nav>
        <ul className="nav-links">
          <li>
             <img src="background-image/icon.png" alt="Varicose Veins Classifer" className="icon" />
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
