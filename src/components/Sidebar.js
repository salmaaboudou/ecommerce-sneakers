import React from 'react';
import '../styles/Sidebar.css';
import '../styles/Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import useMedia from 'use-media';

function Sidebar() {

    const isSmallScreen = useMedia('(max-width: 985px)');

    if(isSmallScreen){
      return (
        <Menu>
          <a className="menu-item" href="/collections">Collections</a>
          <a className="menu-item" href="/men">Men</a>
          <a className="menu-item" href="/women">Women</a>
          <a className="menu-item" href="/about">About</a>
          <a className="menu-item" href="/contact">Contact</a>
        </Menu>
      );
    }else{
      return null;
    }

}

export default Sidebar;
