import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/Index";
import ModalRegister from "./components/ModalRegister";
import ModalLogin from "./components/ModalLogin";

function App() {
  return (
    <div className="App">
      <Index />
      {/* <ModalLogin /> */}
    </div>
  );
}

export default App;
