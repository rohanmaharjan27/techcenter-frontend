import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  let userId = userDetails.id;

  const [wishlist, setWishlist] = useState([]);

  console.log(wishlist);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/wishlists/${userId}`)
      .then((res) => {
        setWishlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const RemoveFromWishlist = (id) => {
    axios
      .delete(`http://localhost:8000/wishlists/removefromwishlist/${id}`)
      .then((res) => {
        alert(res.data.message_success);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const add = () => {};
  return (
    <div>
      <CardColumns className="cartColumns">
        {wishlist.map((wishlist, index) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`http://localhost:8000/images/${wishlist.product.productImageName}`}
              className="cardImage"
            />
            <Card.Body>
              <Link to={`/products/${wishlist.product._id}`}>
                <Card.Title className="center">
                  {wishlist.product.productName}
                </Card.Title>
              </Link>
              <Card.Text className="center">
                ${wishlist.product.productPrice}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => RemoveFromWishlist(wishlist._id)}
              >
                Remove from Wishlist
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
};

export default Wishlist;
