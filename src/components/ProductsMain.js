import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import { Col, Form } from "react-bootstrap";

const ProductsMain = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState({});

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

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        return product.productName.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, products]);

  return (
    <div>
      <Col sm="5">
        <Form.Control
          className="mr-sm-2"
          type="text"
          placeholder="Search products"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Col>
      {console.log(search)}
      {filteredProducts.length > 0 &&
        filteredProducts.map((product) => (
          <CardProduct key={product._id} data={product} />
        ))}
    </div>
  );
};
export default ProductsMain;
