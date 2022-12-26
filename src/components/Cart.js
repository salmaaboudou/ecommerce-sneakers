import "../styles/Cart.css";
import React from "react";
import imgCart from "../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/icon-delete.svg";
import { useState } from "react";

function Cart(props) {
  const [isOpen, setIsOpen] = useState(false);

  return props.total != 0 ? (
    <div className="cart-container">
      <h4>Cart</h4>
      <div className="product-container">
        <img
          src={imgCart}
          alt="previous image"
          width={"45px"}
          style={{ borderRadius: "5px" }}
        />
        <div className="cart-txt">
          <p>Fall Limited Edition Sne...</p>
          <p className="prices-cart">
            $125 x {props.total}  <strong>  ${props.total * 125}</strong>
          </p>
        </div>
        <button onClick={() => props.setTotal(0) } className="delete-icon">
          <img src={deleteIcon} alt="icon delete" height={"20px"} />
        </button>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  ) : (
    <div className="cart-container">
      <h4>Cart</h4>
      <div className="cart-txt-empty">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
}

export default Cart;
