import React from 'react';
import "../App.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "active-link":"null"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? "active-link":"null"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link":"null"}>Dashboard</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar