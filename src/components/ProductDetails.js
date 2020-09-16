import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Button, Jumbotron } from "react-bootstrap";
import { UserContext } from "../App";

const ProductDetails = ({ match }) => {
  const userFirstName = JSON.parse(localStorage.getItem("userFirstName"));
  const userId = JSON.parse(localStorage.getItem("userId"));

  const [product, setProduct] = useState({});
  const [quanity, setQuantity] = useState(1);

  const [cart, setCart] = useState([]);

  const id = match.params.id; //Route ko /products/:id

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

  const QuantityAdd = () => {
    if (quanity === 10) {
      alert("Max quantity reached");
    } else {
      setQuantity(quanity + 1);
    }
  };

  const QuantitySubtract = () => {
    if (quanity === 1) {
      alert("Minimum quantity reached");
    } else {
      setQuantity(quanity - 1);
    }
  };

  const AddToCart = (product) => {
    console.log("we are in add to cart");
    setCart([...cart, product]);
  };
  return (
    <div>
      <img
        className="productDetailsImage"
        src={`http://localhost:8000/images/${product.productImageName}`}
        alt="Product"
      />
      <div className="productDetails">
        <h1>{userFirstName}</h1>
        <h1>Product Details</h1>
        <p>Name - {product.productName}</p>
        <p>Price - ${product.productPrice}</p>
        <p>Category - {product.productCategory}</p>
        <p>Description - {product.productDescription}</p>
        <p>Manufacturer - {product.productManufacturer}</p>

        <br />
        <p>Quantity</p>
        <Button variant="primary" onClick={QuantitySubtract}>
          -
        </Button>
        <input
          className="quantityInput"
          readOnly
          value={quanity}
          onChange={(e) => setQuantity({ quanity: e.target.value })}
        />
        <Button variant="primary" onClick={QuantityAdd}>
          +
        </Button>
        <br />
        <Button>Your Cart({cart.length})</Button>
        <br />
        <Button variant="primary" onClick={AddToCart}>
          Add to Cart
        </Button>
        <br />

        <Button variant="primary">Add to Wishlist</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
