import React from "react";
import { Card } from "react-bootstrap";

const CardProduct = (product) => {
  const { data } = product;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`http://localhost:8000/images/${data.productImageName}`}
        />
        <Card.Body>
          <Card.Title>{data.productName}</Card.Title>
          <Card.Text>{data.productDescription}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
