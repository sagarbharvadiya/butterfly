import React from 'react'
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className=' col-lg-3'>
                            <div className='logo_top'>
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className='col-lg-9'>
                            <nav className='navbar'>
                                <ul className='nav_menu'>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/">Home</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/About">About</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/Services">Services</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/Portfolio">Portfolio</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/Team">Team</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/Contact">Contact</NavLink></li>
                                </ul>
                                {/* For mobile */}
                                <ul className='nav_menu mobile-menu'>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/">Home</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/About">About</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/Services">Services</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/Portfolio">Portfolio</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/Team">Team</NavLink></li>
                                    <li className='nav_item scroll-to' ><NavLink className="" to="/Contact">Contact</NavLink></li>
                                </ul>
                                <i class="fa-solid fa-bars mobile-toggle"></i>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar