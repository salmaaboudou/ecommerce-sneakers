import React from "react";
import Cartcounter from "./Cartcounter";
import "../styles/Mainpage.css";
import Carrousel from "./Carrousel";

function Mainpage(props) {
  return (
    <main>
      <div className="left-container">
        <Carrousel />
      </div>
      <div className="right-container">
        <div className="text-container">
          <h3>SNEAKER COMPANY</h3>
          <h1> Fall Limited Edition Sneakers </h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="prices-container">
          <div className="row-price-responsive">
            <div className="price-after-discount">
              <h2>$125.00</h2>
              <p>50%</p>
            </div>
            <div className="price-before-discount">
              <p>$250.00</p>
            </div>
          </div>
          <div className="add-to-cart-container">
            <Cartcounter 
            total={props.total}
            setTotal={props.setTotal}
            amountToAdd={props.amountToAdd}
            setAmountToAdd={props.setAmountToAdd}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Mainpage;
