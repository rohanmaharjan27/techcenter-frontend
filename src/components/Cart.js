import React from "react";
import axios from "axios";
import { Button, Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  let subTotal = 0;

  const userDetails = JSON.parse(localStorage.getItem("userData"));
  let userId = userDetails.id;

  let currentCart = [];
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));

  if (cartItems) currentCart = cartItems;

  const removeFromCart = (id) => {
    let newArray = [];

    cartItems.map(
      (currentProduct, index) =>
        currentProduct._id !== id && newArray.push(currentProduct)
    );

    localStorage.setItem("cartItems", JSON.stringify(newArray));
    alert("Product removed from cart");
  };

  const calculateTotal = () => {
    let total = 0;
    currentCart.map((product) => (total += product.productTotal));
    subTotal += total;
    return subTotal;
  };

  const checkOut = () => {
    let checkOutFinal = [];

    cartItems.map((currentProduct, index) =>
      checkOutFinal.push({
        product: currentProduct._id,
        quantity: currentProduct.quantity,
        totalCost: currentProduct.productTotal,
      })
    );

    axios
      .post("http://localhost:8000/orders/checkout", {
        user: userId,
        products: checkOutFinal,
        subTotal: subTotal,
      })
      .then((response) => {
        if (response.data.message_success) {
          alert(response.data.message_success);
          localStorage.removeItem("cartItems");
          window.location.reload();
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

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
              <Link to={`/products/${product._id}`} className="productLink">
                <Card.Title className="center">{product.name}</Card.Title>
              </Link>
              <Card.Text className="center">${product.price}</Card.Text>
              <Card.Text className="center">
                Quantity:{product.quantity}
              </Card.Text>
              <Card.Text className="center">
                Total: ${product.productTotal}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => removeFromCart(product._id)}
                className="removeButton"
              >
                Remove from Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
      <div className="checkOut">
        <p>SubTotal:${calculateTotal()}</p>
        <Button
          variant="primary"
          disabled={currentCart.length === 0}
          onClick={checkOut}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
