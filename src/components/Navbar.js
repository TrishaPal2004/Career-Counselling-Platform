import React from 'react';
import logo from '../Photos/logo3.png'; // Adjust path if needed
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Create a CSS file if needed

const Navbar = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  };

  const navigateSignUp = () => {
    navigate('/signup');
  };
  const navigateprofile=()=>{
    navigate('/profile')
  }
  const navigateAbout=()=>{
    navigate('/about')
  }
  const navigateNEP=()=>{
    navigate('/NEP')
  }
  const navigatehome=()=>{
    navigate('/')
  }
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-brand" style={{ display: 'flex', marginLeft: '15px' }}>
          <img src={logo} width="100" height="100" alt="Logo" />
        </div>
        <div className="container2">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={navigatehome}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={navigateAbout}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  onClick={navigateNEP}>
                NEP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={navigateprofile}>
                Profile
              </a>
            </li>
          </ul>
          <form className="form">
            <button className="btn" type="button" onClick={navigateLogin}>
              Login
            </button>
          </form>
          <form className="form">
            <button className="btn" type="button" onClick={navigateSignUp}>
              SignUp
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
