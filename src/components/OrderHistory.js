import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
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
      <Table bordered responsive="xl">
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Order Details</th>
            <th>Prodcuts Ordered</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
              <td>
                {" "}
                <p>Order Date: {order.date}</p>
              </td>
              <td>
                <p>Payment Type: {order.paymentType}</p>
                <p>Status: {order.status}</p>
              </td>
              <td>
                {order.products.map((productMain) => {
                  return (
                    <td>
                      <img
                        variant="top"
                        width="200px"
                        height="200px"
                        src={`http://localhost:8000/images/${productMain.product.productImageName}`}
                        alt="productImage"
                      />
                      <Link
                        to={`/products/${productMain.product._id}`}
                        className="productLink"
                      >
                        <p>{productMain.product.productName}</p>
                      </Link>
                      <p>${productMain.product.productPrice}</p>
                      <p>Quantity: {productMain.quantity.$numberDecimal}</p>
                      <p>Total: ${productMain.totalCost.$numberDecimal}</p>
                    </td>
                  );
                })}
              </td>
              <td>${order.subTotal}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* {orders.map((order, index) => (
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
      </CardColumns> */}
    </div>
  );
};

export default OrderHistory;
