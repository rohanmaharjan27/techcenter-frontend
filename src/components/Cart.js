import React from "react";
import { Button, Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  let currentCart = [];
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));

  if (cartItems) currentCart = cartItems;

  return (
    <div>
      <CardColumns className="cartColumns">
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
              <Card.Text className="center">
                Quantity:{product.quantity}
              </Card.Text>
              <Card.Text className="center">
                Total: {product.productTotal}
              </Card.Text>
              <Button variant="primary">Remove from Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
};

export default Cart;
