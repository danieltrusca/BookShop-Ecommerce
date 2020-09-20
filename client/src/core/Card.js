import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  showDescriptionFull = false,
  showRemoveProductButton = false,
}) => {
  // const [showViewProductButton, setShowViewProductButton] = useState(true);
  // const [showAddToCartButton, setShowAddToCartButton] = useState(true);
  // const [showRemoveProductButton, setShowRemoveProductButton] = useState(true);
  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
            View Product
          </button>
        </Link>
      )
    );
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button className="btn btn-outline-warning mt-2 mb-2  card-btn-1  ">
          Add to cart
        </button>
      )
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button className="btn btn-outline-danger mt-2 mb-2">
          Remove Product
        </button>
      )
    );
  };
  return (
    <div className="card ">
      <div className="card-header card-header-1 name ">{product.name}</div>
      <div className="card-body">
        {/* {shouldRedirect(redirect)} */}

        <ShowImage item={product} url="product" />

        {/* <p className="card-p  mt-2">{product.description.substring(0, 100)} </p> */}
        <p className="card-p  mt-2 lead">
          {showDescriptionFull
            ? product.description
            : product.description.substring(0, 100)}{" "}
        </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">
          Category: {product.category && product.category.name}
        </p>
        <p className="black-8">
          Added on {moment(product.createdAt).fromNow()}
        </p>
        {showStock(product.quantity)}
        <br />
        {showViewButton(showViewProductButton)}
        {showAddToCartBtn(showAddToCartButton)}
        {showRemoveButton(showRemoveProductButton)}
      </div>
    </div>
  );
};

export default Card;
