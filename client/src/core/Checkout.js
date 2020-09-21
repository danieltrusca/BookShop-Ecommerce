import React, { useState, useEffect } from "react";
import { getProducts } from "./ApiCore";
import { emptyCart } from "./cartHelpers";
import Card from "./Card";
import { isAuthenticated } from "../auth/index";
import { Link } from "react-router-dom";

const Checkout = ({ products, setRun = (f) => f, run = undefined }) => {
  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };
  const showCheckout = () => {
    return isAuthenticated() ? (
      <div>{showDropIn()}</div>
    ) : (
      <Link to="/signin">
        <button className="btn btn-primary">Sign in to checkout</button>
      </Link>
    );
  };
  const showDropIn = () => {
    return <button className="btn btn-success btn-block">Pay</button>;
  };
  return (
    <div>
      <h2>Total: ${getTotal()}</h2>
      {/* {/* {showLoading(data.loading)} */}
      {/* {showSuccess(data.success)}
  {showError(data.error)} */}
      {showCheckout()}
    </div>
  );
};

export default Checkout;
