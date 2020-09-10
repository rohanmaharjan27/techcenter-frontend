import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/Index";
import ModalRegister from "./components/ModalRegister";
import ModalLogin from "./components/ModalLogin";
import ProductsMain from "./components/ProductsMain";

function App() {
  return (
    <div className="App">
      {/* <Index /> */}
      <ProductsMain />
    </div>
  );
}

export default App;
