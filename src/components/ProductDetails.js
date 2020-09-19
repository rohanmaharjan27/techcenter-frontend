import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Button, Jumbotron } from "react-bootstrap";
import { UserContext } from "../App";

const ProductDetails = ({ match }) => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  let userEmail = userDetails.email;
  const id = match.params.id;

  const [wishlistData, setWishlistData] = useState({
    email: userEmail,
    id: id,
  });
  //Route ko /products/:id

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [productTotal, setProductTotal] = useState();

  const sendToCart = (_id, name, price, image, quantity, productTotal) => {
    let currentCart = [];
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

    if (cartItems) currentCart = cartItems;

    const prodObj = {
      _id,
      name,
      price,
      image,
      quantity,
      productTotal,
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

    alert("Product Added to Cart");
    alert("Product Already In Cart");
  };

  const addToWishlist = () => {
    axios
      .post("http://localhost:8000/wishlists/", wishlistData)
      .then((response) => {
        alert(response.data.message_successs);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
    console.log(wishlistData);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setProductTotal(Number(res.data.productPrice));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const QuantityAdd = () => {
    if (quantity === 10) {
      alert("Max quantity reached");
    } else {
      setQuantity(quantity + 1);
    }
  };

  const QuantitySubtract = () => {
    if (quantity === 1) {
      alert("Minimum quantity reached");
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    let total = Number(product.productPrice) * quantity;
    setProductTotal(total);
  }, [product.productPrice, quantity]);

  return (
    <div>
      <img
        className="productDetailsImage"
        src={`http://localhost:8000/images/${product.productImageName}`}
        alt="Product"
      />
      <div className="productDetails">
        <h1>Product Details</h1>
        <p>Name - {product._id}</p>
        <p>Name - {product.productName}</p>
        <p>Price - ${product.productPrice}</p>
        <p>Category - {product.productCategory}</p>
        <p>Description - {product.productDescription}</p>
        <p>Manufacturer - {product.productManufacturer}</p>

        <br />
        <p>Quantity</p>
        <Button variant="primary" onClick={QuantitySubtract}>
          -
        </Button>
        <input
          className="quantityInput"
          readOnly
          value={quantity}
          onChange={(e) => setQuantity({ quanity: e.target.value })}
        />
        <Button variant="primary" onClick={QuantityAdd}>
          +
        </Button>
        <br />
        <p>Total: </p>
        <input
          className="quantityInput"
          readOnly
          value={productTotal}
          onChange={(e) => setProductTotal({ total: e.target.value })}
        />
        <br />
        <Button
          variant="primary"
          onClick={() =>
            sendToCart(
              product._id,
              product.productName,
              product.productPrice,
              product.productImageName,
              quantity,
              productTotal
            )
          }
        >
          Add to Cart
        </Button>
        <br />

        <Button variant="primary" onClick={() => addToWishlist()}>
          Add to Wishlist
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
