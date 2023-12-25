import React from "react";
import { NavLink } from "react-router-dom";
import "./css/CheckoutNav.css";

const CheckoutNav = () => {
  return (
    <>
      <nav style={{ "breadcrumb-divider": "quote( > )" }}>
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <NavLink className="checkout-link" to="/cart">
              Cart
            </NavLink>
          </li>

          <li className="breadcrumb-item">
            <NavLink className="checkout-link" to="/checkout">
              Informatiom
            </NavLink>
          </li>

          <li className="breadcrumb-item">
            <NavLink className="checkout-link" to="/shipping">
              Shipping
            </NavLink>
          </li>

          <li className="breadcrumb-item">
            <NavLink className="checkout-link" to="/payment">
              Payment
            </NavLink>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default CheckoutNav;
