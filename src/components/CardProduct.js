import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProduct = (product) => {
  //product => sab props pass gareko
  const { data } = product;

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

          <Link to={`/products/${data._id}`}>
            <Button variant="primary" data={product}>
              View Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
