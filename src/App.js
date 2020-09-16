import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/Index";
import ProductsMain from "./components/ProductsMain";
import NavbarMain from "./components/NavbarMain";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

export const UserContext = React.createContext();

function App() {
  const [name, setName] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider
        value={{ name: name, setName: ({ value }) => setName(value) }}
      >
        <NavbarMain />

        <Switch>
          <Route exact path="/products" component={ProductsMain} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/" component={Index} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products/:id" component={ProductDetails} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
