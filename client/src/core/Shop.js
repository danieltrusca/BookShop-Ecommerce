import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getCategories } from "./ApiCore";
import Card from "./Card";
import Checkbox from "./Checkbox";

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  useEffect(() => {
    init();
    // loadFilteredResults(skip, limit, myFilters.filters);
  }, []);
  const handleFilters = (filters, filterBy) => {
    console.log("SHOP", filters, filterBy);
  };
  return (
    <Layout
      title="Shop Page"
      description="Search and find books of your choice"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-md-4">
          <h4>Filter by categories</h4>
          <ul>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
          </ul>
          <h4>Filter by price range</h4>
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">Products</h2>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
