import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../news-logo.jpg'; 
import './NavBar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container-fluid">
          <Link className={`navbar-brand ${location.pathname === '/' ? 'active-brand' : ''}`} to="/">NewsPoint</Link>
          <div className='logo mx-2'>
            <img src={logo} alt="NewPoint Logo" srcSet="" height="40" width="40" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/General' ? 'active-link' : ''}`} to="/General">General</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/Business' ? 'active-link' : ''}`} to="/Business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/Entertainment' ? 'active-link' : ''}`} to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/Health' ? 'active-link' : ''}`} to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/Sports' ? 'active-link' : ''}`} to="/Sports">Sports</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
