import React from "react";
import NavbarMain from "./NavbarMain";
import CarouselMain from "./CarouselMain";
import { Link } from "react-router-dom";

const Index = () => {
  const title = () => {
    document.title = "TechCenter";
  };
  return (
    <div>
      <h2>TechCenter Home</h2>
      <CarouselMain />
    </div>
  );
};

export default Index;
