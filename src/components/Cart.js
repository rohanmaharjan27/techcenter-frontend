import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = (product) => {
  const { data } = product;

  let currentCart = [];
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));

  if (cartItems) currentCart = cartItems;

  return (
    <div>
      {currentCart.map((product, index) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`http://localhost:8000/images/${product.image}`}
            className="cardImage"
          />
          <Card.Body>
            <Link to={`/products/${product._id}`}>
              <Card.Title className="center">{product.name}</Card.Title>
            </Link>
            <Card.Text className="center">${product.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
