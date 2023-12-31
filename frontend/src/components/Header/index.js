import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

import Cookies from 'js-cookie'

import logo from '../../assets/images/app_logo_nav.jpeg'
import '../Header/index.css'



const Header = () => {
    const token = Cookies.get('jwt_token')
    const isLogin = token !== undefined ? true : false;
    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true });
    }
    
  return (
    <div className='header'>
        <Link to="/">
        <img className='logo' src={logo} alt="Readers Cafe" />
        </Link>
        <div className='title-container'>
            <h1 className='header-title'>Readers Cafe</h1>
            <p className='header-tagline'>Book, You've Got It!</p>
        </div>
        <nav className='navbar'>
            <ul className='nav-list'>
                <Link to="/" className='link-item'>
                    <li>Home</li>
                </Link>
                <Link to="/dashboard" className='link-item'>
                    <li>Dashboard</li>
                </Link>
                <Link to="/profile" className='link-item'>
                    <li>Profile</li>
                </Link>
                {!isLogin ? (
                    <Link to="/login" className='link-item'>
                        <li>Login</li>
                    </Link>
                ) : (
                    <button className='logout-button' onClick={logout}>
                        <li>Logout</li>
                    </button>
                )}
            </ul>          
        </nav>
    </div>
  )
}

export default Header