import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState({});
  const id = match.params.id; //Route ko /products/:id
  console.log(id, "asdf");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <img
        src={`http://localhost:8000/images/${product.productImageName}`}
        alt="Product"
      />
      <h1>{product.productName}</h1>
    </div>
  );
};

export default ProductDetails;
