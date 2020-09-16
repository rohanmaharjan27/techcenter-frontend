import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProduct = (product) => {
  //product => sab props pass gareko
  const { data } = product;

  const sendToCart = (_id, name, price, image) => {
    let currentCart = [];
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

    if (cartItems) currentCart = cartItems;

    const prodObj = {
      _id,
      name,
      price,
      image,
    };

    currentCart.push(prodObj);

    let finalCart = currentCart.filter(
      (
        product,
        index,
        self //product = each product object,
      ) => index === self.findIndex((t) => t._id === product._id)

      // currentCart=[{_id:"1"},{_id:"2"}, {_id: "1"}]
    );

    const words = ["a", "b", "c"];

    // const filteredWords = words.filter(word => word === "a"); ==> ["a"]

    localStorage.setItem("cartItems", JSON.stringify(finalCart));
    alert("Product Already In Cart");
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`http://localhost:8000/images/${data.productImageName}`}
          className="cardImage"
        />
        <Card.Body>
          <Link to={`/products/${data._id}`}>
            <Card.Title className="center">{data.productName}</Card.Title>
          </Link>
          <Card.Text className="center">${data.productPrice}</Card.Text>
          <Button
            variant="primary"
            onClick={() =>
              sendToCart(
                data._id,
                data.productName,
                data.productPrice,
                data.productImageName
              )
            }
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
