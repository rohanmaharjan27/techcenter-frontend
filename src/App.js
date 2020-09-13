import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/Index";
import ModalRegister from "./components/ModalRegister";
import ModalLogin from "./components/ModalLogin";
import ProductsMain from "./components/ProductsMain";
import NavbarMain from "./components/NavbarMain";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Switch>
        <Route exact path="/products" component={ProductsMain} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/" component={Index} />
        <Route exact path="/products/:id" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default App;
