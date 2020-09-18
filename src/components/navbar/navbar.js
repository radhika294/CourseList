import React from 'react';
import './navbar.scss'
import logo from '../../logo2.jpg'

export default function () {
    return (
      <nav className="navbar">
        <img className="logo" src={logo} alt="website" />

        <ul className="nav-links">
          <li>
            <a href="/" className="nav-component">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-component">
            Contact Us
            </a>
          </li>
        </ul>
      </nav>
    );
}
