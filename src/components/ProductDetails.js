import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const ProductDetails = ({ match }) => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const userId = userDetails.id;
  const id = match.params.id;

  const [wishlistData, setWishlistData] = useState({
    user: userId,
    product: id,
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

    // const words = ["a", "b", "c"];

    // const filteredWords = words.filter(word => word === "a"); ==> ["a"]

    localStorage.setItem("cartItems", JSON.stringify(finalCart));

    alert("Product Already In Cart");

    alert("Product Added to Cart");
  };

  const addToWishlist = () => {
    axios
      .post("http://localhost:8000/wishlists/", wishlistData)
      .then((response) => {
        if (response.data.message_success) {
          alert(response.data.message_success);
        } else {
          alert(response.data.message_error);
        }
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
        <p>Name - {product.productName}</p>
        <p>Price - ${product.productPrice}</p>
        <p>Category - {product.productCategory}</p>
        <p>Description - {product.productDescription}</p>
        <p>Manufacturer - {product.productManufacturer}</p>

        <br />
        <p>Quantity</p>
        <Button variant="primary" onClick={QuantitySubtract}>
          {/* ()=>QuantitySubtract()  // ()=>functionName() one time call */}-
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
        <br />
        <p>
          Total:{" "}
          <input
            className="productTotal"
            readOnly
            value={`$${productTotal}`}
            onChange={(e) => setProductTotal({ total: e.target.value })}
          />
        </p>
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
        <br />
        <Button variant="primary" onClick={() => addToWishlist()}>
          Add to Wishlist
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
