import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";

const ProductsMain = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {products.length > 0 &&
        products.map((product) => (
          <CardProduct key={product._id} data={product} />
        ))}
    </div>
  );
};
export default ProductsMain;
