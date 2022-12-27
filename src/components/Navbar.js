import React from "react";
import "../styles/Cart.css";
import "../styles/Navbar.css";
import NavItem from "./Navitem";
import Cart from "./Cart";
import avatar from "../assets/image-avatar.png";
import iconCart from "/Users/salmaaboudou/Desktop/dev_web/github_projets/ecommerce-sneakers-website/ecommerce-sneakers/src/assets/icon-cart.svg";
import logo from "../assets/logo.svg";
import { useState } from "react";
import useMedia from "use-media";

function Navbar(props) {
  const isBigScreen = useMedia("(min-width: 985px)");
  const isSmallScreen = useMedia("(max-width: 985px)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container-one">
        <div className="navbar-brand">
          <img src={logo} alt="CoolBrand" />
        </div>
        <div className="nav-items">
          <NavItem navLink="Collections" />
          <NavItem navLink="Men" />
          <NavItem navLink="Women" />
          <NavItem navLink="About" />
          <NavItem navLink="Contact" />
        </div>
      </div>
      <div className="nav-container-two">
        <div className="avatar-cart-container">
          <button onClick={() => setIsOpen(!isOpen)} className="icon-cart-link">
            <img src={iconCart} alt="icon cart" />
            <span className="cart-count">{props.total}</span>
          </button>
          {isOpen && (
            <Cart
              total={props.total}
              setTotal={props.setTotal}
            />
          )}
          <button className="image-avatar-link">
            <img src={avatar} alt="Imageavatar" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
