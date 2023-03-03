import React from 'react'
import {  Link } from "react-router-dom";
function Header() {
  return (
    <div>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">login</Link>
            </li>
            <li>
                <Link to="/profile">profile</Link>
            </li>
            </ul>
        </nav>
    </div>  
    )
}

export default Header