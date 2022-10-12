import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-area'>
            <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link to ='/topics' className='navbar-brand fs-2 fw-bold logo'>IC Quiz</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav menu">
        <li className="nav-item">
          <NavLink to ='/topics' className={({isActive}) => isActive ? 'active' : undefined}>Topics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = '/statistics' >Statistics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = '/blog'>Blog</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;