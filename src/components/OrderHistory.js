import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  let userId = userDetails.id;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/orders/${userId}`)
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);
  return (
    <div>
      <CardColumns className="cartColumns">
        {orders.map((order, index) => (
          <Card style={{ width: "50rem" }}>
            <Card.Title>
              <Card.Text>Ordered Date: {order.date}</Card.Text>
              <Card.Text>Payment Type:{order.paymentType}</Card.Text>
              <Card.Text>Status: {order.status}</Card.Text>
            </Card.Title>
            {order.products.map((productMain) => (
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={`http://localhost:8000/images/${productMain.product.productImageName}`}
                  className="cardImage"
                />
                <Link to={`/products/${productMain.product._id}`}>
                  <Card.Title>{productMain.product.productName}</Card.Title>
                </Link>
                <Card.Text>${productMain.product.productPrice}</Card.Text>
                <Card.Text>{productMain.quantity.$numberDecimal}</Card.Text>
                <Card.Text>{productMain.totalCost.$numberDecimal}</Card.Text>
              </Card.Body>
            ))}
          </Card>
        ))}
      </CardColumns>
    </div>
  );
};

export default OrderHistory;
