import React from "react";
import { Card } from "react-bootstrap";
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
        />
        <Card.Body>
          <Link to={`/products/${data._id}`}>
            <Card.Title>{data.productName}</Card.Title>
          </Link>
          <Card.Text>{data.productDescription}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
