import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/icons/Avatar.png'
import arrowdown from '../../assets/icons/chevronDown.png'
import logo from "../../assets/logo/logo.svg"
import './Header.scss'

export default function Header() {
  return (
    <header className='header'>
        <nav className='nav-bar'>
            <section className='nav-bar__image-container'>
                <Link to="/" className='nav-bar__link'>
                    <img
                        className='nav-bar__image'
                        src={logo}
                        alt="climbr logo"
                        />
                </Link>
            </section>
            <section className='nav-bar__left-container'>
                <ul className='nav-bar__lists'>
                    <Link to="/" className='nav-bar__link'>
                        <li className='nav-bar__item'>
                            Orders
                        </li>
                    </Link >  
                    <li className='nav-bar__item'>
                        Subscriptions
                    </li>
                    <li className='nav-bar__item'>
                        Wishlists
                    </li>
                    <Link to="/helper" className='nav-bar__link'>
                        <li className='nav-bar__item'>
                            Helper
                        </li>
                    </Link>
                </ul>
            </section>
            <section className='nav-bar__right-container'>
                <div className='nav-bar__profile'>
                    <img 
                        className='nav-bar__profile-img'
                        src={profile}
                        alt="avatar image"/>    
                    <img
                        className='nav-bar__arrowdown-img'
                        src={arrowdown}
                        alt="arrow down img" />
            
                </div>
                <div className='nav-bar__button-container'>
                    <Link to="/">
                        <button className='nav-bar__button'>
                            GO TO STORE
                        </button>
                    </Link>  
                </div>
            </section>
        </nav>
    </header>
  )
}
