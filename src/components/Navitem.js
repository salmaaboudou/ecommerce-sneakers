import React from 'react'
import "../styles/Navbar.css";

function NavItem(props){
    return(
        <a href="/" className="nav-link">
            {props.navLink}
        </a>
    )
}

export default NavItem ;